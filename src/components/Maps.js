import React, { Component } from "react";
import { connect } from "react-redux";
import { maps } from "../AC";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Map from "react-js-google-maps";

class MyMapComponent extends Component {
    componentDidMount() {
        this.props.onLoadAllMaps();
    }
    render() {
        return (
            <div>
                <h3>My Google Maps Demo</h3>
                <Map
                    id="map1"
                    apiKey="AIzaSyB2FOJ-CCXg67ZLxNexgBAfDpwmDtWVYtI"
                    // mapOptions={mapOptions}
                    style={{ width: "100%", height: 480 }}
                    // onLoad={this.onMapLoad}
                />
            </div>
        );
    }
}

const map = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: 50.4501, lng: 30.5234 }} />
    ))
);

const mapStateToProps = state => {
    return {
        maps: state.maps.maps
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadAllMaps: () => {
            dispatch(maps());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyMapComponent);
