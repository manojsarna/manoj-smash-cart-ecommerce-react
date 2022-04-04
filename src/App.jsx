import React from "react";
import { Routes, Route } from "react-router-dom";
import MockAPI from "./Mockman";
import {
  Header,
  Footer,
  Main,
  PrivateRoute,
  RestrictedRoute,
  ToastContainer,
} from "./components";
import { Auth, Cart, Home, Page404, Products, User, WishList } from "./pages";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/user" element={<User />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route element={<RestrictedRoute />}>
          <Route path="/auth" element={<Auth />} />
        </Route>

        <Route path="/mockman" element={<MockAPI />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
