import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";

import { selectPlases } from "../filter";

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
