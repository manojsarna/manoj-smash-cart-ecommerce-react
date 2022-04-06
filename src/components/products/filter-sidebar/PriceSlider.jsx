import { useProducts } from "../../../context";

export function PriceSlider() {
  const { state, filterDispatch } = useProducts();
  return (
    <ul className="filter-list-container">
      <div className="filter-list-header">Price : ₹{state.price}</div>
      <input
        className="rating-slider"
        type="range"
        min="500"
        max="20000"
        step="500"
        value={state.price}
        onChange={(e) => {
          filterDispatch({ type: "PRICE_SLIDER", payload: e.target.value });
        }}
      />
      <label className=" form-label rating-slider-label">
        <span>₹500</span>
        <span>₹20000</span>
      </label>
    </ul>
  );
}
