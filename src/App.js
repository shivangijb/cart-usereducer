import logo from './logo.svg';
import './App.css';
import {useReducer, useEffect} from "react";
import cartReducer from './reducers/cartReducer';
import Products from './components/Products';
import Cart from './components/Cart';
import axiosInstance from './api/axios';

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
})
const fetchProducts = async () => {
  try {
    const res = await axiosInstance.get("/products");
    return res;
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  fetchProducts()
    .then((res) =>
      dispatch({
        type: "ADD_PRODUCTS",
        payload: res.data.products,
      })
    )
    .then(() => console.log(state.products));
}, []);

  return (
    <div className="App">
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
