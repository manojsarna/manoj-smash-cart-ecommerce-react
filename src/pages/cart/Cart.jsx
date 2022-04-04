import { useDocTitle } from "../../hooks/useDocTitle";
import "./cart.css";

export function Cart() {
  useDocTitle("Cart - SmashCart - Manoj Sarna");
  return <main className="cart">Cart Page</main>;
}
