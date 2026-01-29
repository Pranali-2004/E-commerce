import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryCards = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div style={styles.container}>
      {categories.map((category) => (
        <Link
          key={category}
          to={`/products?category=${encodeURIComponent(category)}`}
          style={styles.link}
        >
          <div style={styles.card}>
            <h3 style={styles.title}>{category}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    margin: "40px 0",
  },
  card: {
    background: "#ffffff",
    padding: "70px 20px",
    borderRadius: "12px",
    textAlign: "center",
    textTransform: "capitalize",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  title: {
    fontSize: "25px",
    color: "#333",
  },
  link: {
    textDecoration: "none",
  },
};

export default CategoryCards;
