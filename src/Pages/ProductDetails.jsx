import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useParams } from "react-router-dom";
import Loader from "../Components/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { addToCart } = useContext(CartContext);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  // Internal CSS Styles
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "70px auto",
      padding: isMobile ? "20px 15px" : "40px 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    loading: {
      textAlign: "center",
      fontSize: isMobile ? "20px" : "24px",
      color: "#666",
      padding: isMobile ? "50px 20px" : "100px 20px",
      fontWeight: "500",
    },
    detailsWrapper: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "30px" : "60px",
      alignItems: "start",
      marginTop: "20px",
    },
    imageSection: {
      backgroundColor: "#f8f9fa",
      padding: isMobile ? "20px" : "40px",
      borderRadius: "12px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: isMobile ? "300px" : "500px",
    },
    image: {
      maxWidth: "100%",
      maxHeight: isMobile ? "300px" : "500px",
      objectFit: "contain",
    },
    infoSection: {
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? "15px" : "20px",
    },
    title: {
      fontSize: isMobile ? "24px" : "32px",
      fontWeight: "bold",
      color: "#333",
      lineHeight: "1.4",
      marginBottom: "10px",
    },
    category: {
      display: "inline-block",
      backgroundColor: "#007bff",
      color: "white",
      padding: "6px 16px",
      borderRadius: "20px",
      fontSize: "14px",
      fontWeight: "600",
      textTransform: "capitalize",
      marginBottom: "10px",
      width: "fit-content",
    },
    rating: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: isMobile ? "14px" : "16px",
      color: "#666",
      marginBottom: "10px",
      flexWrap: "wrap",
    },
    stars: {
      color: "#ffc107",
      fontSize: isMobile ? "16px" : "18px",
    },
    price: {
      fontSize: isMobile ? "28px" : "36px",
      fontWeight: "bold",
      color: "#28a745",
      marginBottom: isMobile ? "15px" : "20px",
    },
    description: {
      fontSize: isMobile ? "14px" : "16px",
      lineHeight: "1.8",
      color: "#555",
      marginBottom: isMobile ? "20px" : "30px",
      textAlign: "justify",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: isMobile ? "14px 30px" : "16px 40px",
      fontSize: isMobile ? "16px" : "18px",
      fontWeight: "600",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      width: isMobile ? "100%" : "fit-content",
    },
    divider: {
      height: "1px",
      backgroundColor: "#e0e0e0",
      margin: isMobile ? "15px 0" : "20px 0",
    },
  };

  if (!product) return <Loader />;

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push("★");
    }
    if (hasHalfStar) {
      stars.push("½");
    }
    while (stars.length < 5) {
      stars.push("☆");
    }
    return stars.join(" ");
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.detailsWrapper}>
          {/* Image Section */}
          <div style={styles.imageSection}>
            <img src={product.image} alt={product.title} style={styles.image} />
          </div>

          {/* Info Section */}
          <div style={styles.infoSection}>
            <h2 style={styles.title}>{product.title}</h2>

            {product.category && (
              <span style={styles.category}>{product.category}</span>
            )}

            {product.rating && (
              <div style={styles.rating}>
                <span style={styles.stars}>
                  {renderStars(product.rating.rate)}
                </span>
                <span>
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
            )}

            <div style={styles.divider}></div>

            <p style={styles.price}>₹{product.price}</p>

            <p style={styles.description}>{product.description}</p>
            <span>
              <button
                style={styles.button}
                onClick={() => addToCart(product)}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#0056b3";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 6px 12px rgba(0, 123, 255, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#007bff";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                Add To Cart
              </button>
              <Link to="/products">
                <button
                  style={styles.button}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#0056b3";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 6px 12px rgba(0, 123, 255, 0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#007bff";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  Back To Products
                </button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
