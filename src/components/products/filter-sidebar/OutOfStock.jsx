import { useProducts } from "../../../context";

export function OutOfStock() {
  const { state, filterDispatch } = useProducts();
  return (
    <ul className="filter-list-container">
      <div className="filter-list-header">Others</div>

      <li>
        <label className=" form-label flex-center">
          <input
            type="checkbox"
            name="out-of-stock"
            checked={state.outOfStock}
            onChange={() => {
              filterDispatch({ type: "OUT_OF_STOCK" });
            }}
          />
          Include Out of Stock
        </label>
      </li>
    </ul>
  );
}
