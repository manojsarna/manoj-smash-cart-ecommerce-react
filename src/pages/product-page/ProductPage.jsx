import { useDocTitle } from "../../hooks/useDocTitle";
import "./product-page.css";
import { useAuth, useCart, useProducts, useWishList } from "../../context";
import { Card } from "../../components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function ProductPage() {
  useDocTitle("ProductPage - SmashCart - Manoj Sarna");
  const { productId } = useParams();
  const { products } = useProducts();
  const product = products.find((item) => item._id === productId);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { wishList, addToWishList, removeFromWishList } = useWishList();
  const { cart, addToCart } = useCart();

  const pathName = useLocation();
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [pathName]);

  const isProductInWishList = wishList?.some((item) => item._id === product._id)
    ? true
    : false;

  const isProductInCart = cart?.some((item) => item._id === product._id)
    ? true
    : false;
  return (
    <main className="sm-main-product-details-page">
      <div className="sm-main-product-page-image">
        <img src={product.image} alt={product.imageAlt} />
      </div>

      <div className="sm-product-page-info">
        <div className="sm-product-page-main-heading">
          <h2 className="sm-product-page-title">{product.title}</h2>
          <h5 className="sm-product-page-subtitle">
            by <span className="link-brand"> {product.brandName}</span>
          </h5>
        </div>

        <div className="sm-product-badge-container">
          <div className="sm-product-page-rating">
            <i className="fas fa-star"></i>
            {product.rating}
          </div>
          <div className="sm-product-badge-name">{product.badgeName}</div>
        </div>

        <div className="sm-product-page-description">{product.description}</div>

        <div className="sm-product-page-pricing">
          <span className="sm-product-page-current-price">
            {`${product.currency}${product.price.current}`}
          </span>
          <span className="sm-product-page-previous-price">
            {`${product.currency}${product.price.previous}`}
          </span>
          <span className="sm-product-page-discount">
            {`( ${product.discount}% Off )`}
          </span>
        </div>

        <div className="sm-product-page-cta">
          <button
            className="btn btn-primary cart-btn"
            onClick={() => {
              if (!user) {
                navigate("/auth", {
                  state: { from: pathName },
                  replace: true,
                });
              } else if (isProductInCart) {
                navigate("/cart");
              } else {
                addToCart(product);
              }
            }}
          >
            <i className="btn-cart fas fa-shopping-cart"></i>

            {isProductInCart && user ? "Go To Cart" : "Add To Cart"}
          </button>
          <button
            className="btn btn-primary cart-btn btn-wishlist"
            title={`${
              isProductInWishList && user
                ? "Remove From Wishlist"
                : "Add To Wishlist"
            }`}
            onClick={() => {
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
            <i className="btn-cart fas fa-heart"></i>

            {isProductInWishList && user
              ? "Remove From Wishlist"
              : "Add To Wishlist"}
          </button>
        </div>
      </div>
      <div className="sm-main-related-products">
        <h2 className="prod-heading">Related Products</h2>
        <div className="sm-main-prod-container">
          {products
            .filter(
              (item) =>
                item.category === product.category && item._id !== productId
            )
            .map((productItem) => (
              <Card
                key={productItem._id}
                product={productItem}
                btnName={"Add To Cart"}
              />
            ))}
        </div>
      </div>
    </main>
  );
}
