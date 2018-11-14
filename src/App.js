import React, { Component } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
//import { Control } from "react-redux-form";
import Maps from "./components/Maps";
import ListPlases from "./components/ListPlases";
import Register from "./components/Register";

class App extends Component {
    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div className="App">
                        <h2>
                            <NavLink to="/register">Places-restaurants</NavLink>
                        </h2>
                        <Route path="/register/" component={Register} />
                        <Route path="/plases/" component={ListPlases} />
                        <Route path="/maps/:id" component={Maps} />
                    </div>
                </Provider>
            </Router>
        );
    }
}

export default App;
