export const filterFunctions = (initialState, state, products) => {
  //const { state, initialState, products } = useProducts();
  console.log(initialState, state, products);
  let finalFilteredData = products;

  //APPLYING PRICE SLIDER FILTER
  if (initialState.price !== state.price) {
    finalFilteredData = finalFilteredData.filter(
      (item) => item.price.current <= state.price
    );
  }

  //APPLYING RANGE SLIDER FILTER
  if (initialState.rating !== state.raing) {
    finalFilteredData = finalFilteredData.filter(
      (item) => item.rating >= state.rating
    );
  }

  //APPLYING CATEGORIES FILTER
  if (state.categories.length !== 0) {
    finalFilteredData = finalFilteredData.filter((item) =>
      state.categories.includes(item.category)
    );
  }

  //APPLYING BRANDS FILTER
  if (state.brands.length !== 0) {
    finalFilteredData = finalFilteredData.filter((item) =>
      state.brands.includes(item.brand)
    );
  }

  //APPLYING OUT OF STOCK FILTER
  if (initialState.outOfStock !== state.outOfStock) {
    finalFilteredData = finalFilteredData.filter(
      (item) => item.inStock !== state.outOfStock
    );
  }

  //SORTING - BY PRICE , BY RATING
  if (state.sort !== null) {
    if (state.sort === "PRICE_HIGH_TO_LOW") {
      finalFilteredData.sort((a, b) => b.price.current - a.price.current);
    } else if (state.sort === "PRICE_LOW_TO_HIGH") {
      finalFilteredData.sort((a, b) => a.price.current - b.price.current);
    } else if (state.sort === "RATING_HIGH_TO_LOW") {
      finalFilteredData.sort((a, b) => b.rating - a.rating);
    } else if (state.sort === "RATING_LOW_TO_HIGH") {
      finalFilteredData.sort((a, b) => a.rating - b.rating);
    }
  }

  return finalFilteredData;
};
