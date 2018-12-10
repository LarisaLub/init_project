import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route, Switch, NavLink } from "react-router-dom";
import history from "./history";
import Maps from "./components/Maps";
import ListPlaces from "./redux/containers/ListPlaces";
import Form from "./redux/containers/FormContainer";

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="App">
                    <h2>
                        <NavLink to="/form">Places-restaurants</NavLink>
                    </h2>

                    <Switch>
                        <Route path="/places" component={ListPlaces} />

                        <Route path="/maps/:id" component={Maps} />
                        <Route path="/form" component={Form} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStoreToProps = state => ({
    token: state.authorization.token
});

export default connect(mapStoreToProps)(Routes);
