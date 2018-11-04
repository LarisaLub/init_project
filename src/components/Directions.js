import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { DirectionsRenderer } from "react-google-maps";
class Directions extends Component {
    state = {};

    render() {
        // directServ = () => {
        //     googleMapLoader({ key: "AIzaSyB2FOJ-CCXg67ZLxNexgBAfDpwmDtWVYtI" })
        //     .then((maps) => {
        //         const directionsService = new maps.DirectionsService();
        //         const directionsDisplay = new maps.DirectionsRenderer();
        //         directionsService.route({
        //             origin: 'MA',
        //             destination: 'Va',
        //             travelMode: 'DRIVING'
        //         }, (response, status) => {
        //             if (status === 'OK') {
        //                 directionsDisplay.setDirections(response);
        //                 console.log(response.routes[0])
        //             } else {
        //                 window.alert('Directions request failed due to ' + status);
        //             }
        //         });
        //     })
        return <button>directionClick</button>;
    }
}

export default Directions;
