import CartActionTypes from "./cart-types";
import { addItemToCart, removeItemFromCart } from "./cart-utils";
//import { clearItemFromCart } from "./cart-actions";

const INITIAL_STATE = {
  hidden: true, //Cart starts hidden
  cartItems: [], //Cart items
};
//Default state, action
const cartReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...currentState,
        hidden: !currentState.hidden, //flip state of hidden
      };
    case CartActionTypes.ADD_ITEM: //When this action comes in do this..
      return {
        ...currentState,
        cartItems: addItemToCart(currentState.cartItems, action.payload), //spread all existing items into array, and then put latest item (payload) at end
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...currentState,
        cartItems: currentState.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ), //return new array with all cart items that dont match the pay load id(item to be removed)
      };
    case CartActionTypes.REMOVE_ITEM:
      return{
        ...currentState,
        cartItems: removeItemFromCart(currentState.cartItems, action.payload)
      }
    default:
      return currentState;
  }
};

export default cartReducer;
