import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishList } from "../../context";

export function CardHorizontal({ product }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const pathName = useLocation();
  const { removeFromCart, updateCartItemQuantity } = useCart();
  const { wishList, addToWishList, removeFromWishList } = useWishList();
  const isProductInWishList = wishList?.some((item) => item._id === product._id)
    ? true
    : false;

  return (
    <div className="sm-card sm-card-hor">
      <div
        className="sm-card-img"
        title="Go To Product Page"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/products/${product._id}`);
        }}
      >
        {product.badgeName && (
          <span className="sm-card-badge">{product.badgeName}</span>
        )}
        <button
          className="sm-card-fav"
          title={`${
            isProductInWishList && user
              ? "Remove From Wishlist"
              : "Add To Wishlist"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            if (!user) {
              navigate("/auth", {
                state: { from: pathName },
                replace: true,
              });
            } else if (isProductInWishList) {
              removeFromWishList(product);
            } else {
              addToWishList(product);
            }
          }}
        >
          <i
            className={`fa-heart ${
              isProductInWishList && user ? "fas" : "far"
            }`}
          ></i>
        </button>
        <img src={product.image} alt={product.imageAlt} />
      </div>
      <div className="sm-card-content">
        <h2
          className="sm-card-content-title"
          title="Go To Product Page"
          onClick={() => navigate(`/products/${product._id}`)}
        >
          {product.title}
        </h2>
        <h2 className="sm-card-content-brand-new">
          <p className="sm-card-flex-rating">
            {`by `}
            <span className="link-brand" title={`Brand: ${product.brandName}`}>
              {product.brandName}
            </span>
          </p>
          <span className="sm-card-rating-new" title="Product Rating">
            <i className="fas fa-star"></i>
            {product.rating}
          </span>
        </h2>
        <div className="sm-card-content-desc" title="Product Description">
          {product.description}
        </div>
        <div className="sm-card-info">
          <span className="sm-card-info-price" title="Current Price">
            {`${product.currency}${product.price.current}`}
            <span className="sm-card-info-price-old" title="Old Price">
              {`${product.currency}${product.price.previous}`}
            </span>
            <span className="sm-card-info-price-save" title="Discount">
              {`(${product.discount}%Off)`}
            </span>
          </span>
          <div className="sm-card-cart-qty-container">
            <div className="sm-cart-qty">
              <label className="from-label">Qty:</label>
              <select
                title="Change Item Quantity"
                name="qty"
                value={product.qty}
                onChange={(e) => {
                  updateCartItemQuantity(product._id, Number(e.target.value));
                }}
              >
                <option className="fw-800" value="1">
                  1
                </option>
                <option className="fw-800" value="2">
                  2
                </option>
                <option className="fw-800" value="3">
                  3
                </option>
                <option className="fw-800" value="4">
                  4
                </option>
                <option className="fw-800" value="5">
                  5
                </option>
              </select>
            </div>
            <button
              className="qty-btn-red"
              title="Remove From Cart"
              onClick={() => removeFromCart(product._id)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
