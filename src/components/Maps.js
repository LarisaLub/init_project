import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";

import { selectPlases } from "../filter";

import pinImage from "../assets/images/pin.png";

const AnyReactComponent = ({ text }) => (
    <div>
        <img src={pinImage} width={50} height={50} />

        {text}
    </div>
);

class Maps extends Component {
    static getDefaultProps() {
        return {
            center: {
                lat: 50.4501,
                lng: 30.5234
            },
            zoom: 13
        };
    }

    state = {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 11,
        markerForRoute: {}
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            });
        });
    }

    render() {
        const { center, zoom, markerForRoute } = this.state;
        if (!center.lat) return null;

        return (
            <div style={{ height: "100vh", width: "100%" }}>
                <GoogleMapReact
                    onClick={evt => {
                        this.setState({
                            markerForRoute: {
                                lat: evt.lat,
                                lng: evt.lng
                            }
                        });
                    }}
                    bootstrapURLKeys={{ key: "AIzaSyB2FOJ-CCXg67ZLxNexgBAfDpwmDtWVYtI" }}
                    defaultCenter={center}
                    defaultZoom={zoom}>
                    <AnyReactComponent
                        lat={center.lat}
                        lng={center.lng}
                        text={"My position"}
                    />
                    {!markerForRoute ? null : (
                        <AnyReactComponent
                            lat={markerForRoute.lat}
                            lng={markerForRoute.lng}
                            text={"Need position"}
                        />
                    )}
                </GoogleMapReact>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        plase: selectPlases(state, ownProps.match.params.id)
    };
};

export default connect(mapStateToProps)(Maps);
