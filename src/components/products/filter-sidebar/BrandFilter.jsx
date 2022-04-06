import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useProducts } from "../../../context";

export function BrandFilter() {
  const { brandsData, state, filterDispatch } = useProducts();
  const navigate = useNavigate();
  const { search } = useLocation();
  const brandString = new URLSearchParams(search).get("brand");
  useEffect(() => {
    if (brandString) {
      filterDispatch({
        type: "FILTERS_RESET",
      });
      filterDispatch({
        type: "BRAND_FILTER",
        payload: brandString,
      });
      navigate("/products");
    }
  }, [brandString]);

  return (
    <ul className="filter-list-container">
      <div className="filter-list-header">Filter by Brands</div>
      {brandsData.map((brandItem) => (
        <li key={brandItem._id}>
          <label className=" form-label flex-center">
            <input
              type="checkbox"
              name={brandItem.brand}
              value={brandItem.brand}
              checked={state.brands.includes(brandItem.brand)}
              onChange={(e) => {
                filterDispatch({
                  type: "BRAND_FILTER",
                  payload: e.target.value,
                });
              }}
            />
            {brandItem.brandName}
          </label>
        </li>
      ))}
    </ul>
  );
}
