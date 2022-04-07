import { Brand, Carousel, Category } from "./components";
import "./home.css";
import { Card } from "../../components";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useProducts } from "../../context";

export function Home() {
  useDocTitle("Home - SmashCart - Manoj Sarna");
  const { brandsData, categoriesData, products } = useProducts();
  return (
    <main className="sm-main">
      <Carousel />
      <div className="sm-main-categories">
        <h2>Best Selling Brands</h2>
        <div className="sm-main-cat-container">
          {brandsData.map((brand) => (
            <Brand key={brand._id} brandItem={brand} />
          ))}
        </div>
      </div>
      <div className="sm-main-categories">
        <h2>Best Selling Categories</h2>
        <div className="sm-main-cat-container">
          {categoriesData.map((category) => (
            <Category key={category._id} categoryItem={category} />
          ))}
        </div>
      </div>
      <div className="sm-main-feature-p">
        <h2 className="prod-heading">Best Selling Products</h2>
        <div className="sm-main-prod-container">
          {products.map(
            (product) =>
              product.tag && (
                <Card
                  key={product._id}
                  product={product}
                  btnName={"Add To Cart"}
                />
              )
          )}
        </div>
      </div>
    </main>
  );
}
