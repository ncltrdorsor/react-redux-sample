import axios from "axios";

export function fetchUsers(){
    return function(dispatch){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch({
                    type: "FETCH_USERS_FULFILLED",
                    payload: response.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: "FETCH_USERS_REJECTED",
                    payload: error
                });
            })
    }
}

export function changeUsersProperty(field, value){
    return function(dispatch){
        dispatch({
            type: "CHANGE_PROPERTY", 
            field: field, 
            value: value,
        });
    }
}