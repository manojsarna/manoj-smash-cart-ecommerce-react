import { Link } from "react-router-dom";

export function CartIcon() {
  return (
    <Link to="/cart" title="Go To Cart">
      <button
        id="cart-btn-header"
        className="sm-icon-btn color-dm sm-icon-btn-primary sm-action-icon-wishlist"
      >
        <div className="icon">
          <i className="fas fa-shopping-cart"></i>
          <span className="icon-badge bd-red icon-bd-top-right ">12</span>
        </div>
      </button>
    </Link>
  );
}
