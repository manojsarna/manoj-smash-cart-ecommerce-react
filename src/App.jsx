import React from "react";
import { Routes, Route } from "react-router-dom";
import MockAPI from "./Mockman";
import { Header, Footer, Main } from "./components";
import { Auth, Cart, Home, Page404, Products, WishList } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/mockman" element={<MockAPI />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
