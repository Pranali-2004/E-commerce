/* import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } =
    useContext(CartContext);

  //empty cart
  if (cart.length === 0) {
    return (
      <div>
        <h2>Your Cart is empty</h2>
        <p>Add items to your cart to see them here.</p>

        <Link to="/products">
          <button>Go to Products</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      ))}

      <div>Total Price: ${getCartTotal().toFixed(2)}</div>

      <div>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
 */

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } =
    useContext(CartContext);

  const styles = {
    container: {
      maxWidth: "900px",
      margin: "200px auto",
      padding: "16px",
    },
    heading: {
      textAlign: "center",
      marginBottom: "24px",
    },
    cartItems: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    summary: {
      marginTop: "24px",
      paddingTop: "16px",
      borderTop: "1px solid #ddd",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap", // ✅ responsive
      gap: "12px",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "10px 18px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    emptyCart: {
      minWidth: "500px",
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f9fafb",
      borderRadius: "8px",
      textAlign: "center",
      padding: "30px",
    },
  };

  // Empty cart
  if (cart.length === 0) {
    return (
      <div style={styles.emptyCart}>
        <h1 style={styles.heading}>Your Cart is empty</h1>
        <p style={styles.heading}>Add items to your cart to see them here.</p>

        <Link to="/products">
          <button style={styles.button}>Go to Products</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Cart</h2>

      <div style={styles.cartItems}>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>

      <div style={styles.summary}>
        <h3>Total: ₹{getCartTotal().toFixed(2)}</h3>

        <Link to="/products">
          <button style={styles.button}>Continue Shopping</button>
        </Link>

        <Link to="/checkout">
          <button style={styles.button}>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
