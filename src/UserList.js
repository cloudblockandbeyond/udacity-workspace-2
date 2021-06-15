import React, { Component } from 'react';

class UserList extends Component {
    render() {
        const { usersByMovie, users } = this.props;

        return(
            <div>
                <p>Liked By:</p>
                <ul>
                    { usersByMovie.map((user) => (
                        <li key={ user }>{ users[user].name }</li>
                    )) }
                </ul>
            </div>
        );
    }
}

export default UserList;