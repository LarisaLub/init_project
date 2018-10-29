import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";

import { geolocated } from "react-geolocated";

import { selectPlases } from "../filter";

import pinImage from "../assets/pin.png";

// const pinComponent = () => ;

const AnyReactComponent = ({ text }) => (
    <div>
        <img src={pinImage} width={50} height={50} />
        <img src={pinImage} width={70} height={70} />

        {text}
    </div>
);

class Maps extends Component {
    static defaultProps = {
        center: {
            lat: 50.4501,
            lng: 30.5234
        },
        zoom: 13
    };

    render() {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                console.log("Доступ разрешён.");
                //действия с полученными данными
            },
            function(error) {
                // если ошибка (можно проверить код ошибки)
                if (error.PERMISSION_DENIED) {
                    console.log("В доступе отказано!");
                }
            }
        );

        // function geoFindMe() {
        //     var output = document.getElementById("out");

        //     if (!navigator.geolocation) {
        //         output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        //         return;
        //     }

        //     function success(position) {
        //         var latitude = position.coords.latitude;
        //         var longitude = position.coords.longitude;

        //         output.innerHTML =
        //             "<p>Latitude is " +
        //             latitude +
        //             "° <br>Longitude is " +
        //             longitude +
        //             "°</p>";

        //         var img = new Image();
        //         img.src =
        //             "https://places.demo.api.here.com/places/v1/discover/search?at=50.4501%2C30.5234&q=restaurant&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg" +
        //             latitude +
        //             "," +
        //             longitude +
        //             "&zoom=13&size=300x300&sensor=false";

        //         output.appendChild(img);
        //     }

        //     function error() {
        //         output.innerHTML = "Unable to retrieve your location";
        //     }

        //     output.innerHTML = "<p>Locating…</p>";

        //     navigator.geolocation.getCurrentPosition(success, error);
        // }

        // <div>
        //     <p>
        //         <button onclick="geoFindMe()">Show my location</button>
        //     </p>
        //     <div id="out" />
        // </div>;

        window.onload = function() {
            var startPos;
            var geoOptions = {
                enableHighAccuracy: true
            };

            var geoSuccess = function(position) {
                startPos = position;
                document.getElementById("startLat").innerHTML = startPos.coords.latitude;
                document.getElementById("startLon").innerHTML = startPos.coords.longitude;
            };
            var geoError = function(error) {
                console.log("Error occurred. Error code: " + error.code);
                // error.code can be:
                //   0: unknown error
                //   1: permission denied
                //   2: position unavailable (error response from location provider)
                //   3: timed out
            };

            navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
        };

        const plase = this.props.plase[0];
        return (
            <div style={{ height: "100vh", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyB2FOJ-CCXg67ZLxNexgBAfDpwmDtWVYtI" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                    <AnyReactComponent
                        lat={plase.position[0]}
                        lng={plase.position[1]}
                        text={plase.title}
                    />
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

export default connect(
    mapStateToProps,
    null
)(Maps);
