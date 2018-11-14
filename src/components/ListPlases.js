import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const classes = {
    table: {
        minWidth: 500
    },
    tableWrapper: {
        overflowX: "auto"
    }
};

class ListPlases extends Component {
    componentDidMount() {
        this.props.onLoadAllArticles();
    }
    render() {
        const { plases } = this.props;
        if (!plases) return null;
        return (
            <Table>
                <TableBody>
                    {plases.map(place => {
                        return (
                            <TableRow key={place.id}>
                                <TableCell component="th" scope="row">
                                    <NavLink
                                        to={`/maps/${place.id}`}
                                        activeStyle={{ color: "red" }}>
                                        {place.title}
                                    </NavLink>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        );
    }
}

const mapStateToProps = state => {
    return {
        plases: state.plases.plases
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadAllArticles: () => {
            //  dispatch(loadAllplases());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPlases);
