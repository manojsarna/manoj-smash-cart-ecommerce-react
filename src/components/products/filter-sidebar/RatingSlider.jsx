import { useProducts } from "../../../context";

export function RatingSlider() {
  const { state, filterDispatch } = useProducts();
  return (
    <ul className="filter-list-container">
      <div className="filter-list-header">Rating: {state.rating}+</div>
      <input
        className="rating-slider"
        type="range"
        min="1"
        max="4"
        step="1"
        value={state.rating}
        onChange={(e) => {
          filterDispatch({ type: "RATING_SLIDER", payload: e.target.value });
        }}
      />
      <label className=" form-label rating-slider-label">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </label>
    </ul>
  );
}
