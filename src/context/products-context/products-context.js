import {
  useContext,
  useState,
  createContext,
  useReducer,
  useEffect,
} from "react";
import { useToast } from "../toast-context/toast-context";
import axios from "axios";
import { filterReducer } from "./filterReducer";
import { filterFunctions } from "./filterFunctions";

const ProductsContext = createContext();

const useProducts = () => useContext(ProductsContext);

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const { dispatch } = useToast();

  useEffect(() => {
    (async function () {
      try {
        const productsResponse = await axios.get("/api/products");
        setProducts(productsResponse.data.products);
        const categoriesResponse = await axios.get("/api/categories");
        setCategoriesData(categoriesResponse.data.categories);
        const brandsResponse = await axios.get("/api/brands");
        setBrandsData(brandsResponse.data.brands);
      } catch (error) {
        console.error(error.response.data.errors);
      }
    })();
  }, []);

  const getProduct = async (item) => {
    try {
      const response = await axios.get(`/api/products/${item._id}`);
      if (response.status === 200) {
        setProduct(response.data.product);
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  const initialState = {
    sidebarShow: false,
    sort: null,
    price: 20000,
    rating: 1,
    brands: [],
    categories: [],
    searchString: "",
    outOfStock: true,
  };

  const [state, filterDispatch] = useReducer(filterReducer, initialState);
  // console.log(state);

  const finalFilteredData = filterFunctions(initialState, state, products);
  return (
    <ProductsContext.Provider
      value={{
        brandsData,
        categoriesData,
        products,
        product,
        getProduct,
        finalFilteredData,
        state,
        initialState,
        filterDispatch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider, useProducts };
