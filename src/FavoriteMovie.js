import React, { Component } from 'react';
import UserList from './UserList';

class FavoriteMovie extends Component {
    render() {
        const { usersByMovie, movies, users } = this.props;
        
        return(
            <div>
                { Object.keys(movies).map((movie) => (
                    <div key={ movie }>
                        <h2>{ movies[movie].name }</h2>
                        { Object.keys(usersByMovie).includes(movie) 
                            ? <UserList usersByMovie={ usersByMovie[movie] } users={ users } />
                            : <p>None of the current users liked this movie</p>
                        }
                    </div>
                )) }
            </div>
        );
    }
}

export default FavoriteMovie;
