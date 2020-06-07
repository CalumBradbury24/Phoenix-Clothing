export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',    //Same string as user reducer is expecting
    payload: user
}) //Returns action object