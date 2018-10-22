import React, { Component } from "react";
import { loadAllplases } from "../../AC";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
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
    state = {};
    componentDidMount() {
        this.props.onLoadAllArticles();
    }
    render() {
        const { plases } = this.props;
        console.log("plases");
        console.log(plases);
        if (!plases) return null;
        return (
            <Table>
                <TableBody>
                    {plases
                        //  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((place, index) => {
                            return (
                                <TableRow key={place.id}>
                                    <TableCell component="th" scope="row">
                                        {place.title}
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
            dispatch(loadAllplases());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPlases);
