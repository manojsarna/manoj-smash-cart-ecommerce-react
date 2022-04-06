import { useLocation } from "react-router-dom";
import { useProducts } from "../../../context";

export function Search({ searchMob }) {
  const location = useLocation();
  const { state, filterDispatch } = useProducts();
  return (
    <div className={`sm-nav-search${searchMob ? "-mobile" : ""}`}>
      {location.pathname === "/products" && (
        <div className="sm-input-container input-search">
          <input
            type="text"
            className="input-basic input-basic-icon"
            placeholder="Search..."
            name="search"
            onChange={(e) =>
              filterDispatch({ type: "SEARCH_STRING", payload: e.target.value })
            }
          />
          <i className="icon-basic fas fa-search"></i>
        </div>
      )}
    </div>
  );
}
