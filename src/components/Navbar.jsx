import "./Navbar.css";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="navbar">
      {/* Left side logo */}
      <div className="navbar-l">
        <Link to="/" className="navbar-link">
          <h1 className="navbar-logo">
            <img className="logo" src={assets.logo} alt="logo" />
            <p>Truck Rental</p>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="nav-links desktop-only">
          {/* Removed Home for desktop */}

          {/* Services Dropdown */}
          <div className="dropdown">
            <span className="navbar-link">Services</span>
            <div className="dropdown-menu">
              <Link to="/services/logistics">Logistics</Link>
              <Link to="/services/support">Customer Support</Link>
            </div>
          </div>

          {/* Products Dropdown */}
          <div className="dropdown">
            <span className="navbar-link">Products</span>
            <div className="dropdown-menu">
              <Link to="/products/light">Light Trucks</Link>
              <Link to="/products/heavy">Heavy Trucks</Link>
              <Link to="/products/accessories">Accessories</Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Right side (Desktop) */}
      <nav className="navbar-nav desktop-only">
        <div className="navbar-link">English</div>

        {/* About Dropdown */}
        <div className="dropdown">
          <span className="navbar-link">About Us</span>
          <div className="dropdown-menu">
            <a href="#stats">About Us</a>
            <Link to="/about/company">Company</Link>
            <Link to="/about/team">Team</Link>
            <Link to="/about/careers">Careers</Link>
            <a href="#contact">Contact Us</a>
            <a href="#Testionials">Testemonial</a>
          </div>
        </div>

        <Link to="/News" className="navbar-link">
          News
        </Link>
        <Link to="/contact" className="navbar-link inquiry-btn">
          Inquiry
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <div className="mobile-dropdown">
          <p onClick={() => toggleDropdown("services")}>Services</p>
          {openDropdown === "services" && (
            <div>
              <Link to="/services/rental" onClick={() => setMenuOpen(false)}>
                Truck Rental
              </Link>
              <Link to="/services/logistics" onClick={() => setMenuOpen(false)}>
                Logistics
              </Link>
              <Link to="/services/support" onClick={() => setMenuOpen(false)}>
                Customer Support
              </Link>
            </div>
          )}
        </div>

        <div className="mobile-dropdown">
          <p onClick={() => toggleDropdown("products")}>Products</p>
          {openDropdown === "products" && (
            <div>
              <Link to="/products/light" onClick={() => setMenuOpen(false)}>
                Light Trucks
              </Link>
              <Link to="/products/heavy" onClick={() => setMenuOpen(false)}>
                Heavy Trucks
              </Link>
              <Link
                to="/products/accessories"
                onClick={() => setMenuOpen(false)}
              >
                Accessories
              </Link>
            </div>
          )}
        </div>

        <div className="mobile-dropdown">
          <p onClick={() => toggleDropdown("about")}>About Us</p>
          {openDropdown === "about" && (
            <div>
              <Link to="/about/company" onClick={() => setMenuOpen(false)}>
                Company
              </Link>
              <Link to="/about/team" onClick={() => setMenuOpen(false)}>
                Team
              </Link>
              <Link to="/about/careers" onClick={() => setMenuOpen(false)}>
                Careers
              </Link>
            </div>
          )}
        </div>

        <Link to="/News" onClick={() => setMenuOpen(false)}>
          News
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Inquiry
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
