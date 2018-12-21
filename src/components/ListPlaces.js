import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";

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
