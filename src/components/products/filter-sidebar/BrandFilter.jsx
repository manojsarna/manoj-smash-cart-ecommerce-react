import { useProducts } from "../../../context";

export function BrandFilter() {
  const { brandsData, state, filterDispatch } = useProducts();

  return (
    <ul className="filter-list-container">
      <div className="filter-list-header">Filter by Brands</div>
      {brandsData.map((brand) => (
        <li key={brand._id}>
          <label className=" form-label flex-center">
            <input
              type="checkbox"
              name={brand.brand}
              value={brand.brand}
              checked={state.brands.includes(brand.brand)}
              onChange={(e) => {
                filterDispatch({
                  type: "BRAND_FILTER",
                  payload: e.target.value,
                });
              }}
            />
            {brand.brandName}
          </label>
        </li>
      ))}
    </ul>
  );
}
