import React, { Component } from "react";
import ListUsers from "../redux/containers/ListUsers";

class Form extends Component {
    state = {
        email: "",
        password: "",

        error: {
            fieldEmail: "",
            textEmail: "",
            fieldPass: "",
            textPass: ""
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

        this.setState({
            error: {
                fieldEmail: this.state.email.length < 4 && "email",
                textEmail: this.state.email.length < 4 && "email text error",
                fieldPass: this.state.password.length < 4 && "password",
                textPass: this.state.password.length < 4 && "password text error"
            }
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const {
            error: { fieldEmail, fieldPass }
        } = this.state;

        this.setState({
            error: {
                fieldEmail: this.state.email.length < 4 && "email",
                textEmail: this.state.email.length < 4 && "email text error",
                fieldPass: this.state.password.length < 4 && "password",
                textPass: this.state.password.length < 4 && "password text error"
            }
        });

        fieldEmail === false &&
            fieldPass === false &&
            this.props.loginSubmit({
                username: this.state.email,
                password: this.state.password
            });
    };

    render() {
        if (this.props.loggedIn) {
            window.location.href = "/places";
        }
        //console.log(this.state);
        return [
            <form onSubmit={this.handleSubmit}>
                <label>
                    email:
                    <input
                        id="InputEmail"
                        type="text"
                        data-type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    {this.state.error.fieldEmail === "email" && (
                        <p className="errorText"> {this.state.error.textEmail}</p>
                    )}
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
                    {this.state.error.fieldPass === "password" && (
                        <p className="errorText"> {this.state.error.textPass}</p>
                    )}
                </label>
                <br />
                <input type="submit" value="Submit" />
                {this.props.loggedIn && <p>{this.props.token}</p>}
            </form>,
            <ListUsers />
        ];
    }
}

export default Form;
