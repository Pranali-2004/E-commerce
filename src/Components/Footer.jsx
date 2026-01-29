import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "../Pages/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h3>About</h3>
          <p>
            We are an online shopping platform offering quality products across
            multiple categories. Our focus is on providing a smooth, secure, and
            convenient shopping experience with reliable delivery and responsive
            customer support. Shop with confidence and discover great value
            every day.
          </p>
        </div>

        <div className="footer-box">
          <h3>Categories</h3>
          <ul>
            <li>
              <Link to="/products" className="link">
                Electronics
              </Link>
            </li>
            <li>
              <Link to="/products" className="link">
                Jewelery
              </Link>
            </li>
            <li>
              <Link to="/products" className="link">
                Men's Clothing
              </Link>
            </li>
            <li>
              <Link to="/products" className="link">
                Women's Clothing
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>
          <p className="contact-item">
            <FaMapMarkerAlt />
            XYZ, New Delhi, India
          </p>

          <p className="contact-item">
            <FaPhoneAlt />
            +91 1234567890
          </p>

          <p className="contact-item">
            <FaEnvelope />
            ecommerce123@gmail.com
          </p>

          <div className="social-icons">
            <Link className="link">
              <FaGlobe />
            </Link>
            <Link className="link">
              <FaFacebook />
            </Link>
            <Link className="link">
              <FaInstagram />
            </Link>
            <Link className="link">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-text">
        <p>&copy; 2026 All Rights Reserved | Designed by Pranali</p>
      </div>
    </footer>
  );
};

export default Footer;
