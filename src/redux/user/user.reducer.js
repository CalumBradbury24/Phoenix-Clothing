import { UserActionTypes } from './user.types';

const INITIAL_STATE = {     //default value of state
    currentUser: null
};

//If state is ever undefined it will take value of INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){    //action.type is a string
        case UserActionTypes.SET_CURRENT_USER:
            return{ //Return new state
                ...state,   //Always spread in everything in state
                currentUser: action.payload
            } 
        default:
            return state;
    }
}

export default userReducer;