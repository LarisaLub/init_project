import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Books from "./components/Books";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Books />
            </Provider>
        );
    }
}

export default App;
