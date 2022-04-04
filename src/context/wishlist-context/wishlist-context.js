import { useContext, useState, createContext } from "react";
import { useEffect } from "react";
import { useToast } from "../toast-context/toast-context";
import axios from "axios";
import { useAuth } from "../auth-context/auth-context";

const WishListContext = createContext();

const useWishList = () => useContext(WishListContext);

function WishListProvider({ children }) {
  const { encodedToken } = useAuth();

  const [wishList, setWishList] = useState([]);
  const { dispatch } = useToast();

  useEffect(() => {
    if (encodedToken) {
      (async function () {
        try {
          const wishListResponse = await axios.get("/api/user/wishlist", {
            headers: {
              authorization: encodedToken,
            },
          });

          if (wishListResponse.status === 200) {
            setWishList(wishListResponse.data.wishlist);
          }
        } catch (error) {
          console.error(error.response);
        }
      })();
    }
  }, [encodedToken]);

  const addToWishList = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product: item },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      if (response.status === 201) {
        setWishList(response.data.wishlist);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Added to Wishlist",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  const removeFromWishList = async (item) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${item._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setWishList(response.data.wishlist);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Removed from Wishlist",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  return (
    <WishListContext.Provider
      value={{
        wishList,
        addToWishList,
        removeFromWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}

export { WishListProvider, useWishList };
