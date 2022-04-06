import { useProducts } from "../../../context";
export function SortByRating() {
  const { state, filterDispatch } = useProducts();
  return (
    <ul className="filter-list-container">
      <div className="filter-list-header">Sort By Rating</div>
      <li>
        <label className="form-label flex-center">
          <input
            type="radio"
            name="sortByPrice"
            id="price-high-low"
            onChange={() => filterDispatch({ type: "RATING_HIGH_TO_LOW" })}
            checked={state.sort === "RATING_HIGH_TO_LOW"}
          />
          Rating : High to Low
        </label>
      </li>
      <li>
        <label className="form-label flex-center">
          <input
            type="radio"
            name="sortByPrice"
            id="price-low-high"
            onChange={() => filterDispatch({ type: "RATING_LOW_TO_HIGH" })}
            checked={state.sort === "RATING_LOW_TO_HIGH"}
          />
          Rating : Low to High
        </label>
      </li>
    </ul>
  );
}
