import { Link } from "react-router-dom";

export function WishListIcon() {
  return (
    <Link to="/wishlist" title="Go To Wishlist">
      <button
        id="wishlist-btn-header"
        className="sm-icon-btn color-dm sm-icon-btn-primary sm-action-icon-cart"
      >
        <div className="icon">
          <i className="fas fa-heart"></i>
          <span className="icon-badge bd-red icon-bd-top-right ">6</span>
        </div>
      </button>
    </Link>
  );
}
