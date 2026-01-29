import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import Loader from "../Components/Loader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  // URL search params
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "all";

  const styles = {
    container: {
      maxWidth: "1400px",
      margin: "100px auto",
      padding: "32px 20px",
    },
    filterBar: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    select: {
      padding: "8px 12px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      rowGap: "50px",
      columnGap: "25px",
    },
  };

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Loader
  if (loading) return <Loader />;

  // Filter products
  const filteredProducts = products.filter((product) =>
    selectedCategory === "all" ? true : product.category === selectedCategory
  );

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        {/* Category Dropdown */}
        <div style={styles.filterBar}>
          <select
            style={styles.select}
            value={selectedCategory}
            onChange={(e) => {
              const value = e.target.value;
              value === "all"
                ? setSearchParams({})
                : setSearchParams({ category: value });
            }}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>

        {/* Products Grid */}
        <div style={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
