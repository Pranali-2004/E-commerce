import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Internal CSS Styles
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
      fontSize: "32px",
      color: "#333",
      marginBottom: "30px",
      textAlign: "center",
    },
    orderSummary: {
      background: "#f8f9fa",
      borderRadius: "8px",
      padding: "25px",
      marginBottom: "40px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    summaryTitle: {
      fontSize: "24px",
      color: "#333",
      marginBottom: "20px",
      borderBottom: "2px solid #007bff",
      paddingBottom: "10px",
    },
    emptyCart: {
      textAlign: "center",
      color: "#666",
      fontSize: "18px",
      padding: "20px",
    },
    cartItem: {
      display: "flex",
      justifyContent: "space-between",
      padding: "12px 0",
      borderBottom: "1px solid #dee2e6",
      fontSize: "16px",
    },
    cartTotal: {
      fontSize: "22px",
      color: "#007bff",
      marginTop: "15px",
      textAlign: "right",
      fontWeight: "bold",
    },
    form: {
      background: "#fff",
      borderRadius: "8px",
      padding: "30px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    formGroup: {
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "16px",
      border: "2px solid #dee2e6",
      borderRadius: "6px",
      transition: "border-color 0.3s ease",
      boxSizing: "border-box",
      fontFamily: "inherit",
    },
    textarea: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "16px",
      border: "2px solid #dee2e6",
      borderRadius: "6px",
      transition: "border-color 0.3s ease",
      boxSizing: "border-box",
      fontFamily: "inherit",
      resize: "vertical",
      minHeight: "80px",
    },
    errorMessage: {
      color: "#dc3545",
      background: "#f8d7da",
      border: "1px solid #f5c6cb",
      padding: "12px 16px",
      borderRadius: "6px",
      marginBottom: "20px",
      fontSize: "14px",
    },
    successContainer: {
      textAlign: "center",
      padding: "40px 20px",
    },
    successMessage: {
      color: "#28a745",
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "30px",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: "14px 32px",
      fontSize: "16px",
      fontWeight: "600",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      width: "100%",
      marginTop: "10px",
    },
    buttonSecondary: {
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      padding: "14px 32px",
      fontSize: "16px",
      fontWeight: "600",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none",
      display: "inline-block",
    },
  };

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form validation
  const validateForm = () => {
    const { name, email, address, phone } = formData;
    if (!name) {
      setError("Name is required");
      return false;
    }

    if (!email) {
      setError("Email is required");
      return false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return false;
    }

    if (!address) {
      setError("Address is required");
      return false;
    }

    if (!phone) {
      setError("Phone number is required");
      return false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid phone number");
      return false;
    }
    setError("");
    return true;
  };

  // submit order
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // success
    setSuccess(true);
    clearCart();
    setFormData({ name: "", email: "", address: "", phone: "" });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Checkout</h1>

      {/* Order Summary */}
      <div style={styles.orderSummary}>
        <h2 style={styles.summaryTitle}>Order Summary</h2>
        {cart.length === 0 ? (
          <p style={styles.emptyCart}>Your cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <span>
                  {item.title} (x{item.quantity})
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <h3 style={styles.cartTotal}>Total: ₹{getCartTotal()}</h3>
          </>
        )}
      </div>

      {/* Checkout Form */}
      {cart.length > 0 && !success && (
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div style={styles.formGroup}>
            <input
              style={styles.input}
              type="text"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div style={styles.formGroup}>
            <textarea
              style={styles.textarea}
              name="address"
              placeholder="Delivery Address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div style={styles.formGroup}>
            <input
              style={styles.input}
              type="text"
              name="phone"
              placeholder="Phone Number (10 digits)"
              value={formData.phone}
              onChange={handleChange}
              maxLength="10"
            />{" "}
          </div>
          {error && <div style={styles.errorMessage}>{error}</div>}

          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Place Order
          </button>
        </form>
      )}

      {success && (
        <div style={styles.successContainer}>
          <p style={styles.successMessage}>Order Placed Successfully!</p>
          <Link to="/Products" style={{ textDecoration: "none" }}>
            <button
              style={styles.buttonSecondary}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
