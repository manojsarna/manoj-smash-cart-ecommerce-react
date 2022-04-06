import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/theme-context/theme-context";
import {
  AuthProvider,
  CartProvider,
  ProductsProvider,
  ToastProvider,
  WishListProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <ToastProvider>
          <AuthProvider>
            <CartProvider>
              <WishListProvider>
                <ProductsProvider>
                  <App />
                </ProductsProvider>
              </WishListProvider>
            </CartProvider>
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
