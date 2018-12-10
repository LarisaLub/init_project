import React, { Component } from "react";
import ListUsers from "../redux/containers/ListUsers";

class Form extends Component {
    state = {
        email: "",
        password: "",

        error: {
            field: "",
            text: ""
        }
    };

    handleChange = event => {
        const {
            target: {
                value,
                dataset: { type }
            }
        } = event;

        this.setState({
            [type]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.email.length >= 4) {
            //console.log("ок");
        } else {
            this.setState({
                error: {
                    field: "email",
                    text: "email text error"
                }
            });
        }

        if (this.state.password.length >= 4) {
            // console.log("ок");
        } else {
            this.setState({
                error: {
                    field: "password",
                    text: "password text error"
                }
            });
        }

        this.props.loginSubmit({
            username: this.state.username,
            password: this.state.password
        });
    };

    render() {
        if (this.props.loggedIn) {
            window.location.href = "/places";
        }
        return [
            <form onSubmit={this.handleSubmit}>
                <label>
                    username:
                    <input
                        id="InputUsername"
                        type="text"
                        data-type="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    {this.state.error.field === "username" ? (
                        <p className="errorText"> {this.state.error.text}</p>
                    ) : null}
                </label>
                <br />
                <label>
                    password:
                    <input
                        id="InputPassword"
                        type="text"
                        data-type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    {this.state.error.field === "password" ? (
                        <p className="errorText"> {this.state.error.text}</p>
                    ) : null}
                </label>
                <br />
                <input type="submit" value="Submit" />
                {this.props.loggedIn ? <p>{this.props.token}</p> : null}
            </form>,
            <ListUsers />
        ];
    }
}

export default Form;
