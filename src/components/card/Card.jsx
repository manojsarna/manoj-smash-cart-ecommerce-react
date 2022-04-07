import "./card.css";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishList } from "../../context";
export function Card({ product, btnName }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { wishList, addToWishList, removeFromWishList } = useWishList();
  const { cart, addToCart } = useCart();

  const isProductInWishList = wishList?.some((item) => item._id === product._id)
    ? true
    : false;

  const isProductInCart = cart?.some((item) => item._id === product._id)
    ? true
    : false;

  return (
    <div className="sm-card">
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
              navigate("/auth");
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
        <h2 className="sm-card-content-brand">
          <p className="sm-card-flex-rating">
            {`by `}&nbsp;
            <span className="link-brand">{product.brandName}</span>
          </p>
          <span className="sm-card-rating">
            <i className="fas fa-star"></i>
            &nbsp;{product.rating}
          </span>
        </h2>

        <div className="sm-card-info">
          <span className="sm-card-info-price">
            {`${product.currency}${product.price.current}`}
            <span className="sm-card-info-price-old">
              {`${product.currency}${product.price.previous}`}
            </span>
            <span className="sm-card-info-price-save">
              {`(${product.discount}%Off)`}
            </span>
          </span>
          <button
            className="btn btn-primary cart-btn"
            title={isProductInCart && user ? "Go To Cart" : btnName}
            onClick={() => {
              if (!user) {
                navigate("/auth");
              } else if (isProductInCart) {
                navigate("/cart");
              } else {
                addToCart(product);
              }
            }}
          >
            <i className="btn-cart fas fa-shopping-cart"></i>
            {isProductInCart && user ? "Go To Cart" : btnName}
          </button>
        </div>
      </div>
      {!product.inStock && (
        <div className="sm-card-overlay">
          <h3 className="sm-card-overlay-text">Out Of Stock</h3>
        </div>
      )}
    </div>
  );
}
