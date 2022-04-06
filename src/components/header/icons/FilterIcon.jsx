import { useProducts } from "../../../context";

export function FilterIcon() {
  const { filterDispatch } = useProducts();
  return (
    <button
      className="sm-icon-btn color-dm sm-icon-btn-primary sm-nav-icon-filter"
      onClick={() => filterDispatch({ type: "SIDEBAR_SHOW" })}
    >
      <div className="icon">
        <i className="fas fa-filter"></i>
      </div>
    </button>
  );
}
