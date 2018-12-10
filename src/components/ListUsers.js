import React, { Component } from "react";

class ListUsers extends Component {
    state = {};
    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        return (
            <div>
                <p>ListUsers</p>
                {/* {this.props.users.map(user => (
                    //<p key={user.id}>{user.first_name}</p>
                    <p key={user.id}>{user.last_name}</p>
                    //<p>{user.first_name}</p>
                ))} */}
            </div>
        );
    }
}

export default ListUsers;
