import React, { createContext } from 'react';
import { PRODUCTS } from '../pages/shop/products';
import { useState } from 'react';

export const ShopContext = createContext(null);
//this is where the heavy lifting is happening 
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};//default cart funtion. 

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());


  //counts the total cart amount added for an item id. 
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0 ) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item)); // has to be a number
        totalAmount += cartItems[item] *itemInfo.price
      }
    }
    return totalAmount;
  };


  //this is essentially just adding 1 to the item id count. 
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
//removing one from count
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
//used for manually changing cart amount with num keys. 
  const updateCartItemCount = (newAmount, itemId)=>{
    setCartItems((prev) => ({...prev, [itemId]: newAmount}));
  };


  const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}; // used in other pages

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
