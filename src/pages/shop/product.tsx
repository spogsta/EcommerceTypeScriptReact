import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopcontext';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data; // data that will be passed to shop display's
  const { addToCart, cartItems } = useContext(ShopContext); // add to cart and cart items from "shop context". keeps track of items in cart
  const cartItemAmount =cartItems[id] // displays how many of a singular item are counted (used for the buttons)
  return (
    <div className="product">
      <img src={productImage} alt="borked" />
      <div className="description">
        <p>
          <b>{productName}</b>{' '}
        </p>

        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to cart {cartItemAmount > 0 &&<>({cartItemAmount})</>} {/*increases button amount in the cart */}
      </button>
    </div>
  );
};
