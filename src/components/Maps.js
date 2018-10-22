import React, { Component } from "react";
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
                    <AnyReactComponent
                        lat={50.45323}
                        lng={30.52212}
                        text={"Sundyk Pub"}
                    />
                    <AnyReactComponent lat={50.45192} lng={30.52186} text={"Mamamia!"} />

                    <AnyReactComponent
                        lat={50.45111}
                        lng={30.52548}
                        text={"Buddha Bar"}
                    />
                    <AnyReactComponent
                        lat={50.45078}
                        lng={30.52277}
                        text={"Yapona Khata"}
                    />
                    <AnyReactComponent lat={50.45338} lng={30.51958} text={"Barboss"} />
                    <AnyReactComponent
                        lat={50.44645}
                        lng={30.52318}
                        text={"Eurasia at Lyuteranskaya"}
                    />
                    <AnyReactComponent
                        lat={50.45147}
                        lng={30.52163}
                        text={"Vopros Coffee Shop"}
                    />
                    <AnyReactComponent
                        lat={50.445776}
                        lng={30.516549}
                        text={"Machete Latin Casa Restaurant Club"}
                    />
                    <AnyReactComponent
                        lat={50.44567}
                        lng={30.51806}
                        text={"Viva Oliva"}
                    />
                    <AnyReactComponent
                        lat={50.44779}
                        lng={30.52287}
                        text={"Porter Pub"}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Maps;
