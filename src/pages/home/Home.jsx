import { Brand, Carousel, Category } from "./components";
import { categories } from "../../data/category-data";
import { brands } from "../../data/brand-data";
import { products } from "../../data/product-data";
import "./home.css";
import axios from "axios";
import { Card, Loader } from "../../components";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useState, useEffect } from "react";

export function Home() {
  useDocTitle("Home - SmashCart - Manoj Sarna");

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/brands");
        setBrands(data.brands);
        const { data: data1 } = await axios.get("/api/categories");
        setCategories(data1.categories);
        const { data: data2 } = await axios.get("/api/products");
        setTopProducts(data2.products);
      } catch (error) {
        console.error("error", error);
      }
    })();
  }, []);

  return (
    <main className="sm-main">
      <Carousel />
      <div className="sm-main-categories">
        <h2>Best Selling Brands</h2>
        <div className="sm-main-cat-container">
          {brands.map((brand) => (
            <Brand key={brand._id} brandItem={brand} />
          ))}
        </div>
      </div>
      <div className="sm-main-categories">
        <h2>Best Selling Categories</h2>
        <div className="sm-main-cat-container">
          {categories.map((category) => (
            <Category key={category._id} categoryItem={category} />
          ))}
        </div>
      </div>
      <div className="sm-main-feature-p">
        <h2 className="prod-heading">Best Selling Products</h2>
        <div className="sm-main-prod-container">
          {topProducts.map(
            (product) =>
              product.tag && <Card key={product._id} product={product} />
          )}
        </div>
      </div>
    </main>
  );
}
