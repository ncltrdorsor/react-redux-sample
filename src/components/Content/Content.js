import React, { Component } from "react";
import { connect } from "react-redux"

import { fetchUsers } from "redux/actions/usersActions";

//USE OF DECORATORS IS EXPERIMENTAL
@connect((store) => {
    return {
        users: store.users.users
    }
})

export default class MainContent extends Component{
    componentWillMount(){
        this.props.dispatch(fetchUsers());
    }

    render(){

        var fillUsersNodes = function(){
            
            var userNodes = users.map((user)=> {
                return (
                    <div key={user.id}>
                        <div>
                            {user.name} - {user.email}
                        </div>
                    </div>
                )
            });

            return userNodes;
        }        
        var users = this.props.users;
        console.log(users);

        return(
            <div>
                Hello World ....
                <hr/>
                {fillUsersNodes()}
            </div>
        )
    }
}