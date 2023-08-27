"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./cart/cartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveItem = (item) => {
    dispatch(cartActions.removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price);
  }, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title}{" "}
                <button onClick={() => handleRemoveItem(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={handleClearCart}>Clear Cart</button>
        </>
      )}
      <p>{totalPrice}</p>
    </div>
  );
};

export default ShoppingCart;
