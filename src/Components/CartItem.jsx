/* const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };
  return (
    <div>
      <img src={item.image} alt={item.title} />
      <h4>{item.title}</h4>
      <p>${item.price}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>Quantity: {item.quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>

      <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
 */

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const styles = {
    container: {
      display: "flex",
      gap: "16px",
      padding: "16px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      alignItems: "center",
      flexWrap: "wrap", // ✅ responsive
    },
    image: {
      width: "100px",
      height: "100px",
      objectFit: "contain",
      flexShrink: 0,
    },
    info: {
      flex: 1,
      minWidth: "200px",
    },
    title: {
      margin: "0 0 8px 0",
      fontSize: "16px",
    },
    price: {
      margin: "4px 0",
      fontWeight: "bold",
    },
    removeBtn: {
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      padding: "6px 12px",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "8px",
    },
    quantityBox: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginTop: "10px",
      flexWrap: "wrap",
    },
    qtyBtn: {
      padding: "4px 10px",
      fontSize: "16px",
      cursor: "pointer",
    },
    subtotal: {
      marginTop: "8px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <img src={item.image} alt={item.title} style={styles.image} />

      <div style={styles.info}>
        <h4 style={styles.title}>{item.title}</h4>
        <p style={styles.price}>₹{item.price}</p>

        <div style={styles.quantityBox}>
          <button style={styles.qtyBtn} onClick={handleDecrement}>
            -
          </button>
          <span>Qty: {item.quantity}</span>
          <button style={styles.qtyBtn} onClick={handleIncrement}>
            +
          </button>
        </div>

        <p style={styles.subtotal}>
          Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          style={styles.removeBtn}
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
