import { useProducts } from "../../../context";

export function CategoryFilter() {
  const { categoriesData, state, filterDispatch } = useProducts();
  return (
    <ul className="filter-list-container">
      <div className="filter-list-header">Categories</div>
      {categoriesData.map((category) => (
        <li key={category._id}>
          <label className=" form-label flex-center">
            <input
              type="checkbox"
              name={category.category}
              value={category.category}
              checked={state.categories.includes(category.category)}
              onChange={(e) => {
                filterDispatch({
                  type: "CATEGORY_FILTER",
                  payload: e.target.value,
                });
              }}
            />
            {category.categoryName}
          </label>
        </li>
      ))}
    </ul>
  );
}
