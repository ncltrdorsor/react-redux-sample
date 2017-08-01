import React, { Component } from "react";
import { connect } from "react-redux"

import { fetchUsers, changeUsersProperty } from "redux/actions/usersActions";

//USE OF DECORATORS IS EXPERIMENTAL
@connect((store) => {
    return {
        users: store.users.users,
        description: store.users.description || ""
    }
})

export default class MainContent extends Component{
    componentWillMount(){
        this.props.dispatch(fetchUsers());
    }

    _onInputCHange = (event) => {
        this.props.dispatch(changeUsersProperty(event.target.name, event.target.value));
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

        return(
            <div>
                Hello World ....
                <hr/>
                <div>
                    <label htmlFor="description">This one works</label>
                    <input type="text" name="description" onChange={this._onInputCHange} value={this.props.description}/>
                </div>
                <div>
                    <label htmlFor="description">This one doesnt</label>
                    <input type="text" name="description" value={this.props.description}/>
                </div>
                <hr/>
                {fillUsersNodes()}
            </div>
        )
    }
}