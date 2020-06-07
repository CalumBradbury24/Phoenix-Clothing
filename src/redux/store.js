import { createStore, applyMiddleware } from 'redux';
//Middleware catches and displays actions that get fired (goes between actions firing and root-reducer)
import logger from 'redux-logger'//Redux Middleware

import rootReducer from './root-reducer';

const middleWares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middleWares))//Spread in all values in array as individual arguments

export default store;