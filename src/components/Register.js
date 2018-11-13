
import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Register extends Component {
	constructor(props) {
	state = { 
		user: {
			firstName: '',
			lastName: '',
			username: '',
			password: ''
		},
		submitted: false
}
this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
	const { name, value } = event.target;
	const { user } = this.state;
	this.setState({
		user: {
			...user,
			[name]: value
		}
	});
}

handleSubmit(event) {
	event.preventDefault();

	this.setState({ submitted: true });
	const { user } = this.state;
	const { dispatch } = this.props;
	if (user.firstName && user.lastName && user.username && user.password) {
		dispatch(userActions.register(user));
	}
}
	render() { 
		const { registering  } = this.props;
        const { user, submitted } = this.state;
		return (  
			<div>
			<h2>Register</h2>
			<form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                        {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
						}
						<TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
		<TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
		<TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
                    </div>
		);
	}
}
 
export default Register;