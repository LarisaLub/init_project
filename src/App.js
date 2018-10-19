import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Books from "./components/Books";
import "./App.css";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import Maps from "./components/Maps";
import { GoogleMap, Marker } from "react-google-maps";

class App extends Component {
    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div className="App">
                        <div>
                            <h2>
                                <div>
                                    <NavLink to="/books">Books</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/maps">Maps</NavLink>
                                </div>
                            </h2>
                        </div>
                        <Route path="/books" component={Books} />
                        <Route path="/maps" component={Maps} />
                    </div>
                </Provider>
            </Router>
        );
    }
}

export default App;
