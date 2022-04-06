import { useProducts } from "../../../context";
export function SortByPrice() {
  const { state, filterDispatch } = useProducts();
  return (
    <ul className="filter-list-container">
      <div className="filter-list-header">Sort By Price</div>
      <li>
        <label className="form-label flex-center">
          <input
            type="radio"
            name="price-high-to-low"
            id="price-high-to-low"
            onChange={() => filterDispatch({ type: "PRICE_HIGH_TO_LOW" })}
            checked={state.sortByPrice === "PRICE_HIGH_TO_LOW"}
          />
          Price : High to Low
        </label>
      </li>
      <li>
        <label className="form-label flex-center">
          <input
            type="radio"
            name="price-low-to-high"
            id="price-low-to-high"
            onChange={() => filterDispatch({ type: "PRICE_LOW_TO_HIGH" })}
            checked={state.sortByPrice === "PRICE_LOW_TO_HIGH"}
          />
          Price : Low to High
        </label>
      </li>
    </ul>
  );
}
