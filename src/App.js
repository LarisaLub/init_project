import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";

import "./App.css";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import Maps from "./components/Maps";
import { GoogleMap, Marker } from "react-google-maps";
import Button from "@material-ui/core/Button";
import "typeface-roboto";
import Collapse from "@material-ui/core/Collapse";
import Plases from "./components/Plases";
import GoogleMapReact from "google-map-react";
//import Paper from "material-ui/Paper";
//import Typography from "material-ui/Typography";
//import { typography } from "material-ui/styles";

class App extends Component {
    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div className="App">
                        <div>
                            <h2>
                                <div>
                                    <NavLink to="/plases">Plases</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/maps">Maps</NavLink>
                                </div>
                            </h2>
                        </div>
                        <Route path="/plases" component={Plases} />
                        <Route path="/maps" component={Maps} />
                    </div>
                </Provider>
            </Router>
        );
    }
}

export default App;
