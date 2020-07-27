import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  //default value of state
  currentUser: null,
};

//If state is ever undefined it will take value of INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
  switch (
    action.type //action.type is a string
  ) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        //Return new state
        ...state, //Always spread in everything in state
        currentUser: action.payload,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE: //Cases can be stacked
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
