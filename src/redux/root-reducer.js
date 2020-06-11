//Represents overall reducer (combination of all reducers)
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory/directory.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';//Use local storage as default storage
import shopReducer from "./shop/shop.reducer";

//Persist config
const persistConfig = {
    key: 'root',
    storage,
    whitelist: [ //Contains the string names of any reducers we want to store
        'cart'  //Cart reducer will persist
    ]
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
