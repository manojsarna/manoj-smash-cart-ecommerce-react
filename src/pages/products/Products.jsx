import { useLocation } from "react-router-dom";
import { Card, FilterSidebar, Loader } from "../../components";
import { useDocTitle } from "../../hooks/useDocTitle";
import "./products.css";
import { useProducts } from "../../context";
import { useState, useEffect } from "react";

export function Products() {
  useDocTitle("Products - SmashCart - Manoj Sarna");
  const [loading, setLoading] = useState();
  const { products, finalFilteredData } = useProducts();
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timeout);
  }, [products]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [pathname]);

  return loading ? (
    <Loader show={loading} />
  ) : (
    <main className="sm-main">
      <div className="sm-main-product-page">
        <FilterSidebar />

        <div className="sm-main-products-container">
          {finalFilteredData.map((product) => (
            <Card key={product._id} product={product} btnName={"Add To Cart"} />
          ))}
        </div>
      </div>
    </main>
  );
}
