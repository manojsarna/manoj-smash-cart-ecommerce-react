import { useDocTitle } from "../../hooks/useDocTitle";
import "./cart.css";
import { CardHorizontal } from "../../components";
import { useCart } from "../../context";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
export function Cart() {
  useDocTitle("Cart - SmashCart - Manoj Sarna");
  const { cart } = useCart();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [pathname]);

  const initialCheckoutState = {
    cartItems: 0,
    totalPrice: 0,
    deliveryPrice: 100,
    discount: 0,
  };

  const finalCheckout = cart.reduce(
    (acc, currentProduct) => ({
      ...acc,
      cartItems: acc.cartItems + currentProduct.qty,
      totalPrice:
        acc.totalPrice + currentProduct.price.current * currentProduct.qty,
    }),
    initialCheckoutState
  );
  return (
    <main className="sm-main-cart">
      <div className="sm-cart-products-list">
        {cart.length === 0 && (
          <Link to="/" title="Explore Products" className="cart-shop-button">
            <h3 className="sm-link-heading">
              Looking for products to add in cart
            </h3>
            <button
              id="carousel-btn"
              className="shop-now-hover btn btn-primary btn-bold "
              title="Go To Products"
            >
              {" "}
              <i className="fab fa-opencart"></i>
              Shop Now
            </button>
          </Link>
        )}
        {cart.map((product) => (
          <CardHorizontal key={product._id} product={product} />
        ))}
      </div>

      {cart.length !== 0 && (
        <div className="sm-cart-checkout-container">
          <div className="sm-cart-checkout-title">Checkout</div>
          <div className="sm-cart-checkout-details">
            Quantity:
            <span className="sm-cart-checkout-amt">
              {finalCheckout.cartItems} items
            </span>
          </div>
          <div className="sm-cart-checkout-details">
            Price:
            <span className="sm-cart-checkout-amt">
              ₹{finalCheckout.totalPrice}
            </span>
          </div>
          <div className="sm-cart-checkout-details">
            Delivery:
            <span className="sm-cart-checkout-amt">
              ₹{finalCheckout.cartItems !== 0 ? "100" : "0"}
            </span>
          </div>
          <div className="sm-cart-checkout-details">
            Discount:
            <span className="sm-cart-checkout-amt">
              -₹{finalCheckout.discount}
            </span>
          </div>
          <div className="sm-cart-checkout-details sm-cart-total">
            Total :
            <span className="sm-cart-checkout-amt">
              ₹
              {finalCheckout.cartItems !== 0
                ? finalCheckout.totalPrice +
                  finalCheckout.deliveryPrice -
                  finalCheckout.discount
                : "0"}
            </span>
          </div>
          <button className="btn btn-primary btn-nowrap btn-place-order mt-5">
            <i className="fas fa-shopping-bag mr-10"></i>
            Place Order
          </button>
        </div>
      )}
    </main>
  );
}
