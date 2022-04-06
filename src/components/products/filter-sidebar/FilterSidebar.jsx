import { useProducts } from "../../../context";
import { BrandFilter } from "./BrandFilter";
import { CategoryFilter } from "./CategoryFilter";
import "./filter-sidebar.css";
import { OutOfStock } from "./OutOfStock";
import { PriceSlider } from "./PriceSlider";
import { RatingSlider } from "./RatingSlider";
import { SortByPrice } from "./SortByPrice";
import { SortByRating } from "./SortByRating";

export function FilterSidebar() {
  const { state, filterDispatch } = useProducts();
  return (
    <div
      className={`sm-main-filter-container ${
        state.sidebarShow ? "sm-sidebar-show" : ""
      }`}
    >
      <div className="filter-title">
        <span>FILTERS</span>
        <button
          className="btn-link-txt"
          title="Clear All Filters"
          onClick={() => filterDispatch({ type: "FILTERS_RESET" })}
        >
          CLEAR ALL
        </button>
      </div>

      <SortByPrice />
      <SortByRating />
      <PriceSlider />
      <RatingSlider />
      <CategoryFilter />
      <BrandFilter />
      <OutOfStock />
    </div>
  );
}
