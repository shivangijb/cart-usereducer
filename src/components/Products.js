import React, { useEffect, useReducer } from "react";
import axiosInstance from "../api/axios";
import cartReducer from "../reducers/cartReducer";
import "./Products.style.css";

const Products = ({ state, dispatch }) => {
  

  const handleAddToCart = (product) => {
    const { id, title, price } = product;
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: id,
        title: title,
        price: price,
        quantity: 1,
      },
    });
    
  };

  return (
    <>
      <div className="productsContainer">
        {state.products?.map((product) => {
          return (
            <div key={product.id} className="item">
              <h3>{product.title}</h3>
              <img width="100px" src={product.thumbnail} />
              <h4>{`Rs. ${product.price}`}</h4>
              <button onClick={() => handleAddToCart(product)}>
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
