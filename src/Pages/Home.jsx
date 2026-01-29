import { useContext, useEffect, useState } from "react";
import "./homepage.css";
import ProductCard from "../Components/ProductCard";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CategoryCards from "../Components/CategoryCards";
import Loader from "../Components/Loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 6));
      })
      .catch((error) => console.error(error));
    setLoading(false);
  }, []);

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="homepage-container">
        <header className="homepage-header">
          <h1>Welcome to Our Store!</h1>
          <p>Discover amazing deals on the latest products. </p>
          <Link to="/products">
            <button className="shop-button">Shop Now</button>
          </Link>
        </header>
      </div>

      <section>
        <h1 style={{ textAlign: "center", marginTop: "30px" }}>
          Shop by Category
        </h1>

        <CategoryCards />
      </section>

      <section className="featured-section">
        <h2 className="featured-title">Featured Products</h2>

        {loading ? (
          <Loader />
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}

        <div className="view-all-container">
          <Link to="/products">
            <button className="view-button">View All Products</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
