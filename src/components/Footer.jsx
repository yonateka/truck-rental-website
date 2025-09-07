import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h4 className="footer-heading">Company</h4>

          <Link to="/AboutUs" className="footer-link">
            About Us
          </Link>
          <Link to="/news" className="footer-link">
            News
          </Link>
          <Link to="/Case" className="footer-link">
            Case Studies
          </Link>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h4 className="footer-heading">Services</h4>
          <Link to="/TruckRental" className="footer-link">
            Truck Rental
          </Link>
          <Link to="/Logistics" className="footer-link">
            Logistics
          </Link>
          <Link to="/FleetManagement" className="footer-link">
            Fleet Management
          </Link>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h4 className="footer-heading">Products</h4>

          <Link to="/accessories" className="footer-link">
            Accessories
          </Link>
          <Link to="/medium-trucks" className="footer-link">
            Medium Trucks
          </Link>
          <a href="/large-trucks" className="footer-link">
            Heavy Trucks
          </a>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h4 className="footer-heading">Support</h4>

          <a className="footer-link" href="/Contact">
            Contact Us
          </a>

          <Link to="/Faq" className="footer-link">
            FAQ
          </Link>
          <Link to="/Help" className="footer-link">
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
