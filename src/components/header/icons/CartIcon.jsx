import { Link } from "react-router-dom";
import { useAuth, useCart } from "../../../context";

export function CartIcon() {
  const { cart } = useCart();
  const { user } = useAuth();
  return (
    <Link to="/cart" title="Go To Cart">
      <button
        id="cart-btn-header"
        className="sm-icon-btn color-dm sm-icon-btn-primary sm-action-icon-cart"
      >
        <div className="icon">
          <i className="fas fa-shopping-cart"></i>
          <span
            className={`icon-badge bd-red icon-bd-top-right ${
              user ? (cart?.length === 0 ? "icon-hide " : "") : "icon-hide"
            } `}
          >
            {" "}
            {cart.length}
          </span>
        </div>
      </button>
    </Link>
  );
}
