import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useProducts } from "../../../context";

export function CategoryFilter() {
  const { categoriesData, state, filterDispatch } = useProducts();
  const navigate = useNavigate();
  const { search } = useLocation();
  const categoryString = new URLSearchParams(search).get("category");

  useEffect(() => {
    if (categoryString) {
      filterDispatch({
        type: "FILTERS_RESET",
      });
      filterDispatch({
        type: "CATEGORY_FILTER",
        payload: categoryString,
      });
      navigate("/products");
    }
  }, [categoryString]);

  return (
    <ul className="filter-list-container">
      <div className="filter-list-header">Categories</div>
      {categoriesData.map((categoryItem) => (
        <li key={categoryItem._id}>
          <label className=" form-label flex-center">
            <input
              type="checkbox"
              name={categoryItem.category}
              value={categoryItem.category}
              checked={state.categories.includes(categoryItem.category)}
              onChange={(e) => {
                filterDispatch({
                  type: "CATEGORY_FILTER",
                  payload: e.target.value,
                });
              }}
            />
            {categoryItem.categoryName}
          </label>
        </li>
      ))}
    </ul>
  );
}
