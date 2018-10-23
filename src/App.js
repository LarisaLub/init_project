import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Maps from "./components/Maps";

import "./App.css";

import ListPlases from "./components/ListPlases";

class App extends Component {
    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div className="App">
                        <h2>
                            <NavLink to="/plases">Places-restaurants</NavLink>
                        </h2>

                        <Route path="/plases/" component={ListPlases} />
                        <Route path="/maps/:id" component={Maps} />
                    </div>
                </Provider>
            </Router>
        );
    }
}

export default App;
