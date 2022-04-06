import { useDocTitle } from "../../hooks/useDocTitle";
import "./cart.css";

export function Cart() {
  useDocTitle("Cart - SmashCart - Manoj Sarna");
  return (
    <main class="sm-main-cart">
      <div class="sm-cart-products-list">
        <div class="sm-card sm-card-hor">
          <div class="sm-card-img">
            <span class="sm-card-badge">Best seller</span>
            <button class="sm-card-fav" title="Add To Wishlist">
              <i class="far fa-heart"></i>
            </button>
            <img
              src="/lib/assets/images/badminton/badminton-2.webp"
              alt="badminton"
            />
          </div>
          <div class="sm-card-content">
            <h2 class="sm-card-content-title" title="Click To Know More!!">
              Yonex GR 303 Aluminum Blend Badminton Racquets with Full Cover,
              Pack of 2 and Mavis combo
            </h2>
            <h2 class="sm-card-content-brand" title="Click To Know More!!">
              {" "}
              by{" "}
              <a href="#" class="link-brand">
                Yonex
              </a>
            </h2>
            <div class="sm-card-content-desc" title="Click To Know More!!">
              {" "}
              Low torsion steel shaft, Ideal for beginners and intermediate
              level players , Comes with head cover
            </div>
            <div class="sm-card-info">
              <span class="sm-card-info-price">
                ₹1249
                <span class="sm-card-info-price-old">₹1750</span>
                <span class="sm-card-info-price-save">Save ₹501 (29%)</span>
              </span>
              <div class="sm-card-cart-qty-container">
                <div class="sm-cart-qty">
                  <label class="from-label">Qty:</label>
                  <select name="qty" id="qty">
                    <option class="fw-800" value="1">
                      1
                    </option>
                    <option class="fw-800" value="2" selected>
                      2
                    </option>
                    <option class="fw-800" value="3">
                      3
                    </option>
                    <option class="fw-800" value="4">
                      4
                    </option>
                    <option class="fw-800" value="5">
                      5
                    </option>
                    <option class="fw-800" value="6">
                      6
                    </option>
                    <option class="fw-800" value="7">
                      7
                    </option>
                    <option class="fw-800" value="8">
                      8
                    </option>
                    <option class="fw-800" value="9">
                      9
                    </option>
                    <option class="fw-800" value="9">
                      10
                    </option>
                  </select>
                </div>
                <button class="qty-btn-red">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sm-cart-checkout-container">
        <div class="sm-cart-checkout-title">Checkout</div>
        <div class="sm-cart-checkout-details">
          Quantity:<span class="sm-cart-checkout-amt">10 items</span>
        </div>
        <div class="sm-cart-checkout-details">
          Price:<span class="sm-cart-checkout-amt">₹12490.00</span>
        </div>
        <div class="sm-cart-checkout-details">
          Delivery:<span class="sm-cart-checkout-amt">₹100.00</span>
        </div>
        <div class="sm-cart-checkout-details">
          Discount:<span class="sm-cart-checkout-amt">-₹2100.00</span>
        </div>
        <div class="sm-cart-checkout-details sm-cart-total">
          Total :<span class="sm-cart-checkout-amt">₹10490.00</span>
        </div>
        <button class="btn btn-primary btn-nowrap btn-place-order mt-5">
          <i class="fas fa-shopping-bag mr-10"></i>
          Place Order
        </button>
      </div>
    </main>
  );
}
