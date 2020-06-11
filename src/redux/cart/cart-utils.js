//Utility functions, organised functions that we might need in multiple files grouped in one location

export const addItemToCart = (currentCartItems, cartItemToAdd) => {
  //Look in cart to see if cart item already exists in cart
  const existingCartItem = currentCartItems.find(
    CurrentcartItem => CurrentcartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return currentCartItems.map((//Returns new array. Need to return new versions of state so components re-render properly
      currentCartItem 
    ) =>
      currentCartItem.id === cartItemToAdd.id
        ? { ...currentCartItem, quantity: currentCartItem.quantity + 1 }//Updater quantity
        :  currentCartItem //return cart item as is
    );
  }
//If cart item not found in array, return new array with existing cart items and new cart item
  return [...currentCartItems, {...cartItemToAdd, quantity: 1}];
};

export const removeItemFromCart = (currentCartItems, cartItemToRemove) => {
  const existingCartItem = currentCartItems.find(
    currentCartItem => currentCartItem.id === cartItemToRemove.id
  )

  if(existingCartItem.quantity === 1){//Filter keeps values where the function returns true
    return currentCartItems.filter(currentCartItem => currentCartItem.id !== cartItemToRemove.id)
  }

  return currentCartItems.map(
    currentCartItem => currentCartItem.id ? 
    {...currentCartItem, quantity: currentCartItem.quantity - 1}
    : currentCartItem
  )
}
