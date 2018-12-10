import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const plasses = {
    table: {
        minWidth: 500
    },
    tableWrapper: {
        overflowX: "auto"
    }
};
export default class ListPlases extends Component {
    static propTypes = {
        getPlases: PropTypes.func.isRequired,
        places: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getPlaces();
    }
    render() {
        const { places } = this.props;

        return (
            <Table>
                <TableBody>
                    {places.map(places => {
                        return (
                            <TableRow key={places.id}>
                                <TableCell component="th" scope="row">
                                    <NavLink
                                        to={`/maps/${places.id}`}
                                        activeStyle={{ color: "red" }}>
                                        {places.title}
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
