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
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        {/* <Route path="/products/:productId" element={<ProductPage />}></Route> */}

        <Route element={<PrivateRoute />}>
          <Route path="/user" element={<User />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>

        <Route element={<RestrictedRoute />}>
          <Route path="/auth" element={<Auth />}></Route>
        </Route>

        <Route path="/mockman" element={<MockAPI />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
