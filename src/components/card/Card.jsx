import "./card.css";
import { useNavigate } from "react-router-dom";
import { useAuth, useWishList } from "../../context";
export function Card({ product }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { wishList, addToWishList, removeFromWishList } = useWishList();

  const productInWishList = wishList?.some((p) => p._id === product._id)
    ? true
    : false;
  return (
    <div className="sm-card">
      <div className="sm-card-img">
        {product.badgeName && (
          <span className="sm-card-badge">{product.badgeName}</span>
        )}
        <button
          className="sm-card-fav"
          title={`${
            productInWishList && user
              ? "Remove From Wishlist"
              : "Add To Wishlist"
          }`}
          onClick={() => {
            if (!user) {
              navigate("/auth");
            } else if (productInWishList) {
              removeFromWishList(product);
            } else {
              addToWishList(product);
            }
          }}
        >
          <i
            className={`fa-heart ${productInWishList && user ? "fas" : "far"}`}
          ></i>
        </button>
        <img src={product.image} alt={product.imageAlt} />
      </div>
      <div className="sm-card-content">
        <h2 className="sm-card-content-title" title="Click To Know More!!">
          {product.title}
        </h2>
        <h2 className="sm-card-content-brand" title="Click To Know More!!">
          <p className="sm-card-flex-rating">
            {`by `}&nbsp;
            <a href="#" className="link-brand">
              {product.brandName}
            </a>
            <span className="sm-card-rating">
              <i className="fas fa-star"></i>
              &nbsp;{product.rating}
            </span>
          </p>
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
          <button className="btn btn-primary cart-btn">
            <i className="btn-cart fas fa-shopping-cart"></i>
            Add To Cart
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
