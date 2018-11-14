import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import classNames from "classnames";
import Input from "@material-ui/core/Input";
//import { withStyles } from "@material-ui/core/styles";
//import MenuItem from "@material-ui/core/MenuItem";
//import TextField from "@material-ui/core/TextField";
//import { Control } from "react-redux-form";

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    dense: {
        marginTop: 16
    },
    menu: {
        width: 200
    }
});

class Register extends Component {
    state = {};
    render() {
        console.log("привет");
        return (
            <div>
                <h4>
                    register )))
                    <br />
                    if you want to see a list of restaurants on the map :)
                </h4>
                <button type="submit">Submit</button>
            </div>

            //     <form>
            //    <TextField
            //    id="filled-email-input"
            //    label="Email"
            //    className={classes.textField}
            //    type="email"
            //    name="email"
            //    autoComplete="email"
            //    margin="normal"
            //    variant="filled"
            //  />
            //  <TextField
            //    id="filled-password-input"
            //    label="Password"
            //    className={classes.textField}
            //    type="password"
            //    autoComplete="current-password"
            //    margin="normal"
            //    variant="filled"
            //  />
            //  </form>
        );
    }
}

export default Register;
