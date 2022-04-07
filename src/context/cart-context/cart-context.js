import { useContext, useState, createContext } from "react";
import { useEffect } from "react";
import { useToast } from "../toast-context/toast-context";
import axios from "axios";
import { useAuth } from "../auth-context/auth-context";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const { encodedToken } = useAuth();
  const [cart, setCart] = useState([]);
  const { dispatch } = useToast();

  useEffect(() => {
    if (encodedToken) {
      (async function () {
        try {
          const cartResponse = await axios.get("/api/user/cart", {
            headers: {
              authorization: encodedToken,
            },
          });

          if (cartResponse.status === 200) {
            setCart(cartResponse.data.cart);
          }
        } catch (error) {
          console.error(error.response.data.errors);
        }
      })();
    }
  }, [encodedToken]);
  const addToCart = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: item },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      if (response.status === 201) {
        setCart(response.data.cart);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Added to Cart",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setCart(response.data.cart);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Removed from Cart",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  const updateCartItemQuantity = async (productId, quantity) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        {
          qty: quantity,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 200) {
        setCart(response.data.cart);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Cart Quantity Updated",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, useCart };
