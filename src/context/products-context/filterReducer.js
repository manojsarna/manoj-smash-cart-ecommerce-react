export const filterReducer = (state, action) => {
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

  switch (action.type) {
    case "SIDEBAR_SHOW":
      return {
        ...state,
        sidebarShow: !state.sidebarShow,
      };

    case "PRICE_SLIDER":
      return {
        ...state,
        price: action.payload,
      };

    case "RATING_SLIDER":
      return {
        ...state,
        rating: action.payload,
      };

    case "CATEGORY_FILTER":
      return {
        ...state,
        categories: state.categories.includes(action.payload)
          ? state.categories.filter((item) => item !== action.payload)
          : [...state.categories, action.payload],
      };

    case "BRAND_FILTER":
      return {
        ...state,
        brands: state.brands.includes(action.payload)
          ? state.brands.filter((item) => item !== action.payload)
          : [...state.brands, action.payload],
      };

    case "OUT_OF_STOCK":
      return {
        ...state,
        outOfStock: !state.outOfStock,
      };

    case "PRICE_HIGH_TO_LOW":
      return {
        ...state,
        sort: "PRICE_HIGH_TO_LOW",
      };

    case "PRICE_LOW_TO_HIGH":
      return {
        ...state,
        sort: "PRICE_LOW_TO_HIGH",
      };

    case "RATING_HIGH_TO_LOW":
      return {
        ...state,
        sort: "RATING_HIGH_TO_LOW",
      };

    case "RATING_LOW_TO_HIGH":
      return {
        ...state,
        sort: "RATING_LOW_TO_HIGH",
      };

    case "SEARCH_STRING":
      return {
        ...state,
        searchString: action.payload,
      };

    case "FILTERS_RESET":
      return initialState;

    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
};
