import React, { Component } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
//import application from "./assets/styles/";

import Routes from "./Route";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
