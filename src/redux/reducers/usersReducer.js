export default function reducer(state = {
    //Initial State
    users: [],
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch(action.type){
        case "FETCH_USERS": {
            return {
                ...state,
                fetching: true
            }
        }

        case "FETCH_USERS_FULFILLED":{
            return {
                ...state,
                fetched: true,
                fetching: false,
                users: action.payload
            }
        }

        case "FETCH_USERS_REJECTED":{
            return{
                ...state,
                fetching: false,
                error: action.payload
            }
        }
    }

    return state;
}