const INITIAL_STATE = {     //default value of state
    currentUser: null
}

//If state is ever undefined it will take value of INITIAL_STATE
const userReducer = (currentState = INITIAL_STATE, action) => {
    switch(action.type){    //action.type is a string
        case 'SET_CURRENT_USER':
            return{ //Return new state
                ...currentState,   //Always spread in everything in state
                currentUser: action.payload
            } 
        default:
            return currentState;
    }
}

export default userReducer;