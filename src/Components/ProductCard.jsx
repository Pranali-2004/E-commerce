/* import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>
      <button onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
 */

import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      backgroundColor: "#fff",
    },
    image: {
      width: "100%",
      height: "180px",
      objectFit: "contain",
      marginBottom: "10px",
    },
    title: {
      fontSize: "14px",
      marginBottom: "20px",
      height: "40px",
    },
    price: {
      fontWeight: "bold",
      marginBottom: "0px",
    },
    buttonGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    },
    btn: {
      width: "100%",
      padding: "8px",
      fontSize: "14px",
      cursor: "pointer",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#007bff",
      color: "#fff",
    },
    detailsBtn: {
      backgroundColor: "#6c757d",
    },
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />

      <h4 style={styles.title}>{product.title}</h4>
      <p style={styles.price}>₹{product.price}</p>

      <div style={styles.buttonGroup}>
        <Link to={`/product/${product.id}`}>
          <button style={{ ...styles.btn, ...styles.detailsBtn }}>
            View Details
          </button>
        </Link>

        <button style={styles.btn} onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
