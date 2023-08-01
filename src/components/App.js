import React, { useEffect } from "react";
import "../styles/App.css";
import Header from "./header/Header";
import Home from "./product/Home";
import ProductDetail from "./product/ProductDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import Cart from "./header/Cart";
import ProductCard from "./product/ProductCard";
import { useState } from "react";
import Login from "./Login";
import axios from "axios";
import { Filter } from "@material-ui/icons";
import Fliter from "./header/Fliter";
import CheckOut from "./checkOut";

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const [data, setData] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSelectedItem = (item) => {
    console.log(item);
    setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
  };
  const handleRemoveFromCart = (cartindex) => {
    const _CART = selectedItems.filter((item, index) => cartindex !== index);
    setSelectedItems(_CART);
    // updateCartItemCount(_CART.length);
  };
  // const updateCartItemCount = (count) => {
  //   setCartItemCount(count);
  // };

  return (
    <div>
      <BrowserRouter>
        <Header
          data={data}
          selectedItems={selectedItems}
          
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedItems={selectedItems}
                onSelectedItem={onSelectedItem}
                data={data}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cart"
            element={
              <Cart
                selectedItems={selectedItems}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route
            path="product-details/:id"
            element={
              <ProductDetail
                onSelectedItem={onSelectedItem}
                selectedItems={selectedItems}
              />
            }
          />
          <Route path="filter/:id" element={<Filter />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
