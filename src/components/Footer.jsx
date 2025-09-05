import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h4 className="footer-heading">Company</h4>
          <a href="#stats" className="footer-link">
            About Us
          </a>
          <Link to="/news" className="footer-link">
            News
          </Link>
          <Link to="/case" className="footer-link">
            Case Studies
          </Link>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h4 className="footer-heading">Services</h4>
          <Link to="/services" className="footer-link">
            Truck Rental
          </Link>
          <Link to="/services" className="footer-link">
            Logistics
          </Link>
          <Link to="/services" className="footer-link">
            Fleet Management
          </Link>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h4 className="footer-heading">Products</h4>

          <Link to="/products" className="footer-link">
            Small Trucks
          </Link>
          <Link to="/products" className="footer-link">
            Medium Trucks
          </Link>
          <a href="#product" className="footer-link">
            Heavy Trucks
          </a>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h4 className="footer-heading">Support</h4>

          <a className="footer-link" href="#contact">
            Contact Us
          </a>

          <Link to="/faq" className="footer-link">
            FAQ
          </Link>
          <Link to="/help" className="footer-link">
            Help Center
          </Link>
        </div>
      </div>

      <p className="footer-text">
        © {new Date().getFullYear()} TruckRent. All Rights Reserved.
      </p>
    </footer>
  );
}
