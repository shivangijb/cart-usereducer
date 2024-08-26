import React, { useEffect } from "react";
import "./Cart.style.css";
import cartReducer from "../reducers/cartReducer";

const Cart = ({ state, dispatch }) => {
    console.log("state", state.cart)
  const handleChange = (id, quantity) => {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: {
        id,
        quantity,
      },
    });
  };
  
  return (
    <div className="cartContainer">
      <h2>Cart</h2>
      <div className="cartItems">
        {state.cart?.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <h4>{cartItem.title}</h4>
              <div>
                <button
                  onClick={() => handleChange(cartItem.id, cartItem.quantity - 1)}
                >
                  -
                </button>
                <div>{cartItem.quantity}</div>
                <button
                  onClick={() => handleChange(cartItem.id, cartItem.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
