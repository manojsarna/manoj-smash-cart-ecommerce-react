import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "../toast-context/toast-context";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const smashCartToken = localStorage.getItem("smashCartToken");
  const [user, setUser] = useState();
  const [encodedToken, setEncodedToken] = useState();
  const { dispatch } = useToast();

  useEffect(() => {
    if (smashCartToken) {
      (async function () {
        setEncodedToken(smashCartToken);
        try {
          const response = await axios.post("/api/auth/verify", {
            encodedToken: smashCartToken,
          });
          console.log(response);
          if (response.status === 200) {
            setUser(response.data.user);
          }
        } catch (error) {
          console.error(error.response);
        }
      })();
    }
  }, []);

  const loginAuth = async (loginDetails) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: loginDetails.email,
        password: loginDetails.password,
      });

      if (response.status === 200) {
        localStorage.setItem("smashCartToken", response.data.encodedToken);

        setUser(response.data.foundUser);
        setEncodedToken(response.data.encodedToken);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Login Successful",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  const logoutAuth = () => {
    localStorage.removeItem("smashCartToken");
    setUser(null);
    setEncodedToken(null);
  };

  const signUpAuth = async (signUpDetails) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: signUpDetails.firstName,
        lastName: signUpDetails.lastName,
        email: signUpDetails.email,
        password: signUpDetails.password,
      });
      if (response.status === 201) {
        localStorage.setItem("smashCartToken", response.data.encodedToken);
        setUser(response.data.createdUser);
        setEncodedToken(response.data.encodedToken);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "SignUp Successful",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, encodedToken, loginAuth, logoutAuth, signUpAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
