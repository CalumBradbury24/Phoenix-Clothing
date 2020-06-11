import { createSelector } from 'reselect';
//input selector
const selectCart = state => state.cart;//Gets cart object

export const selectCartItems = createSelector( //Called in cart-icon.jsx 
    [selectCart], 
    (cart) => cart.cartItems //cart object passed in to this function and passes out the cart items
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);
export const selectCartItemsCount = createSelector(
    [selectCartItems], //gets cart items
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,//total quantity of cart items
        0
    )
);

//selector to sum all prices of items
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,//total quantity of cart items
        0
    )
);
    