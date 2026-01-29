import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "../Pages/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { cart } = useContext(CartContext);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="nav-logo" onClick={closeMenu}>
            ShopNest
          </Link>

          <div className="menu-icon" onClick={toggleMenu}>
            <div className={isMenuOpen ? "hamburger active" : "hamburger"}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-link cart-link"
                onClick={closeMenu}
              >
                <FaShoppingCart className="cart-icon" />

                {cart.length > 0 && (
                  <span className="cart-badge">{cart.length}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
