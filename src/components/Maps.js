import React, { Component } from "react";
import { connect } from "react-redux";
import { maps } from "../AC";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
//import Map from "react-js-google-maps";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
    static defaultProps = {
        center: {
            lat: 50.4501,
            lng: 30.5234
        },
        zoom: 13
    };

    render() {
        return (
            <div style={{ height: "100vh", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyB2FOJ-CCXg67ZLxNexgBAfDpwmDtWVYtI" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                    <AnyReactComponent lat={50.4501} lng={30.5234} text={"restaurant"} />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Maps;
