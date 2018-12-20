import React, { Component } from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Polyline,
    Marker
} from "react-google-maps";

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
            newMarker: {
                lat: lat,
                lng: lng
            }
        });
    };

    componentDidMount() {
        this.props.getCurrentLocs();
        this.props.getPlaces();
    }

    render() {
        const { center, newMarker } = this.state;
        console.log("component props", this.props);
        if (!this.props.currentPosition.lat || this.props.plaсe.length === 0) return null;
        console.log("component props", this.props);
        return (
            <div style={{ height: "70vh", width: "100%" }}>
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2FOJ-CCXg67ZLxNexgBAfDpwmDtWVYtI&callback=initMap"
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "700px" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                    lat={this.props.plaсe[0].position[0]}
                    lng={this.props.plaсe[0].position[1]}
                    latCurrent={this.props.currentPosition.lat}
                    lngCurrent={this.props.currentPosition.lng}
                    onClick={evt => {}}
                    activeNewMarker={this.activeNewMarker}
                    newMarker={newMarker}
                />
            </div>
        );
    }
}
