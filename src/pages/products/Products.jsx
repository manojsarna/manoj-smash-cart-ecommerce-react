import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Card, FilterSidebar } from "../../components";
import { useDocTitle } from "../../hooks/useDocTitle";
import "./products.css";
import { useProducts } from "../../context";

export function Products() {
  useDocTitle("Products - SmashCart - Manoj Sarna");
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { products, finalFilteredData } = useProducts();

  return (
    <main className="sm-main">
      <div className="sm-main-product-page">
        <FilterSidebar />

        <div className="sm-main-products-container">
          {finalFilteredData.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
