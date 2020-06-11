import { UserActionTypes } from './user.types';


export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,    //Calls function from user.types to set user
    payload: user
}); //Returns action object