import React, { Component } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Maps from "./components/Maps";
import ListPlases from "./components/ListPlases";
import Directions from "./components/Directions";

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
                        <Route path="/maps/:id" component={Directions} />
                    </div>
                </Provider>
            </Router>
        );
    }
}

export default App;
