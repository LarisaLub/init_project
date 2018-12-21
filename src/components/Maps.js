import React, { Component } from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Polyline,
    Marker
} from "react-google-maps";
import { URL_3 } from "../redux/constants";

const MyMapComponent = withScriptjs(
    withGoogleMap(props => {
        return (
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: props.lat, lng: props.lng }}
                onClick={evt => {
                    let lat = evt.latLng.lat();
                    let lng = evt.latLng.lng();
                    props.activeNewMarker(evt.latLng.lat(), evt.latLng.lng());
                }}>
                <Marker position={{ lat: props.lat, lng: props.lng }} />
                {!props.latCurrent ? null : (
                    <Marker position={{ lat: props.latCurrent, lng: props.lngCurrent }} />
                )}
                <Polyline
                    path={[
                        { lat: props.lat, lng: props.lng },
                        { lat: props.latCurrent, lng: props.lngCurrent }
                    ]}
                />
            </GoogleMap>
        );
    })
);

export default class Maps extends Component {
    state = {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 20,
        newMarker: {},
        markerForRoute: {}
    };
    activeNewMarker = (lat, lng) => {
        this.setState({
            newMarker: { lat, lng }
        });
    };

    componentDidMount() {
        this.props.getCurrentLocs();
        this.props.getPlaces();
    }

    render() {
        const { newMarker } = this.state;
        if (!this.props.currentPosition.lat || this.props.plaсe.length === 0)
            //&& this.props.currentPosition.lng
            return null;

        return (
            <div style={{ height: "70vh", width: "100%" }}>
                <MyMapComponent
                    isMarkerShown
                    googleMapURL={URL_3}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "700px" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                    lat={this.props.plaсe[0].position[0]}
                    lng={this.props.plaсe[0].position[1]}
                    latCurrent={this.props.currentPosition.lat}
                    lngCurrent={this.props.currentPosition.lng}
                    activeNewMarker={this.activeNewMarker}
                    newMarker={newMarker}
                />
            </div>
        );
    }
}
