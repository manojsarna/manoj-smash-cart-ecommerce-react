import { Link } from "react-router-dom";
import { useAuth, useCart } from "../../../context";

export function CartIcon() {
  const { cart } = useCart();
  const { user } = useAuth();

  const totalQuantity = cart.reduce((acc, cur) => acc + cur.qty, 0);
  return (
    <Link to="/cart" title="Go To Cart">
      <button
        id="cart-btn-header"
        className="sm-icon-btn color-dm sm-icon-btn-primary sm-action-icon-cart"
      >
        <div className="icon">
          <i className="fas fa-shopping-cart"></i>
          {user && cart.length !== 0 && (
            <span className={`icon-badge bd-red icon-bd-top-right `}>
              {totalQuantity}
            </span>
          )}
        </div>
      </button>
    </Link>
  );
}
