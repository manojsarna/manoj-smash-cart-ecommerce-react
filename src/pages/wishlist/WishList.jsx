import { useDocTitle } from "../../hooks/useDocTitle";
import "./wishlist.css";
import { Card } from "../../components";
import { useAuth, useWishList } from "../../context";
import { Link } from "react-router-dom";

export function WishList() {
  useDocTitle("Wishlist - SmashCart - Manoj Sarna");
  const { wishList } = useWishList();
  return (
    <main className="sm-main">
      <div className="sm-main-feature-p">
        <h2 className="prod-heading">Wishlist Products</h2>
        <div className="sm-main-prod-container">
          {wishList.length === 0 ? (
            <Link to="/" title="Explore Products">
              <button
                id="carousel-btn"
                className="shop-now-hover btn btn-primary btn-bold"
                title="Go To Products"
              >
                {" "}
                <i className="fab fa-opencart"></i>
                Shop Now
              </button>
            </Link>
          ) : (
            ""
          )}

          {wishList.map((product) => (
            <Card
              key={product._id}
              product={product}
              btnName={"Move To Cart"}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
