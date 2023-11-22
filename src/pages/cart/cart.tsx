import React from 'react';
import React, { useContext } from 'react';
import { PRODUCTS } from '../shop/products';
import { ShopContext } from '../../context/shopcontext';
import { CartItem } from './cart-item';
import './cart.css';
import {useNavigate} from 'react-router-dom'



export const Cart = () => {
  const { addToCart, cartItems, getTotalCartAmount } = useContext(ShopContext); //using context fropm shopcontext
  const totalAmount = getTotalCartAmount(); //counts total amount for items in cart
  const navigate = useNavigate() //idk what this does
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {  //essentialy if there is a cart item id that is not = 0 we're returning cart item with data passed through this function.
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    { totalAmount >0 ?(//if total amount is greater than 0, checkout button appears and displays a total price/cost amount. 
      <div className="checkout">
        <p>Subtotal: {totalAmount}$</p>
        <button onClick={()=> navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>

      ): (<div><h1>Cart Empty!</h1> {/* otherwise it shows "cart empty"*/}
      
      </div>
      )}
    </div>
  );
};
