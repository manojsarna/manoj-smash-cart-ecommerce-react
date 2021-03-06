import { Link } from "react-router-dom";
import { useAuth, useWishList } from "../../../context";

export function WishListIcon() {
  const { wishList } = useWishList();
  const { user } = useAuth();
  return (
    <Link to="/wishlist" title="Go To Wishlist">
      <button
        id="wishlist-btn-header"
        className="sm-icon-btn color-dm sm-icon-btn-primary sm-action-icon-cart"
      >
        <div className="icon">
          <i className="fas fa-heart"></i>
          {user && wishList.length !== 0 && (
            <span className={`icon-badge bd-red icon-bd-top-right `}>
              {wishList.length}
            </span>
          )}
        </div>
      </button>
    </Link>
  );
}
