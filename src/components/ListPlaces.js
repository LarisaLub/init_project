import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const plaсes = {
    table: {
        minWidth: 500
    },
    tableWrapper: {
        overflowX: "auto"
    }
};
export default class ListPlaсes extends Component {
    static propTypes = {
        getPlaсes: PropTypes.func.isRequired,
        places: PropTypes.array.isRequired,
        activeLocation: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getPlaces();
    }

    render() {
        const { places } = this.props;
        const { activeLocation } = this.props;
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
