import CartActionTypes from './cart-types';
//Define actions
export const toggleCartHidden = () => ({ //No payload passed because not needed here
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM, //Tell reduce we are adding item
    payload: item //The item we are adding to the cart, pssing item in as payload 
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

//action to remove item from cart
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item //Item to be removed
});