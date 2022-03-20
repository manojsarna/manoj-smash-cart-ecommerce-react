import { Brand, Carousel, Category } from "./components";
import { categories } from "../../data/category-data";
import { brands } from "../../data/brand-data";
import "./home.css";

export function Home() {
  document.title = "Home - SmashCart - Manoj Sarna";
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
    </main>
  );
}
