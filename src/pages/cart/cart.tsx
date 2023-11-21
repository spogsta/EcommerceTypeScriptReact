import React from 'react';
import React, { useContext } from 'react';
import { PRODUCTS } from '../shop/products';
import { ShopContext } from '../../context/shopcontext';
import { CartItem } from './cart-item';
import './cart.css';
import {useNavigate} from 'react-router-dom'



export const Cart = () => {
  const { addToCart, cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate()
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    { totalAmount >0 ?(
      <div className="checkout">
        <p>Subtotal: {totalAmount}$</p>
        <button onClick={()=> navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>

      ): (<div><h1>Cart Empty!</h1>
      
      </div>
      )}
    </div>
  );
};
