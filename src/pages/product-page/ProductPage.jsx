import { useDocTitle } from "../../hooks/useDocTitle";
import "./product-page.css";

export function ProductPage() {
  useDocTitle("ProductPage - SmashCart - Manoj Sarna");
  return <main className="Products">Product Page</main>;
}
