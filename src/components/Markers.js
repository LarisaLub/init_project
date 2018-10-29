import React, { Component } from "react";
import GoogleMap from "../../src/google_map";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";

import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps";
//import { compose, withProps } from "recompose";

// const MarkersMap = withScriptjs(
//     withGoogleMap(props => (
//         <GoogleMap
//             defaultZoom={8}
//             defaultCenter={{ lat: parseFloat(props.lat), lng: parseFloat(props.long) }}>
//             {props.isMarkerShown && (
//                 <Marker
//                     position={{
//                         lat: 50.4501,
//                         lng: 30.5234
//                     }}
//                 />
//             )}
//         </GoogleMap>
//     ))
// );

<MyMapComponent
    isMarkerShown={this.state.isMarkerShown}
    googleMapURL="https://maps.googleapis.com/maps/api/js?
    key=AIzaSyB2FOJ-CCXg67ZLxNexgBAfDpwmDtWVYtI.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    lat={50.4501}
    long={30.5234}
/>;

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMarkerShown: false
        };
    }
    componentDidMount() {
        this.delayedShowMarker();
    }
    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true });
        }, 3000);
    };
    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false });
        this.delayedShowMarker();
    };
    render() {
        let { model } = this.props;
        let lat = model.value.latitudeGeoreferencia;
        let long = model.value.longitudeGeoreferencia;
        return (
            <MarkersMap
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?
   key=myKey.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                lat
                long
            />
        );
    }
}
