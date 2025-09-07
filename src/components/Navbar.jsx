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
              <Link to="/Logistics">Logistics</Link>
              <Link to="/CustomerSupport">Customer Support</Link>
            </div>
          </div>

          {/* Products Dropdown */}
          <div className="dropdown">
            <span className="navbar-link">Products</span>
            <div className="dropdown-menu">
              <Link to="/medium-trucks">Light Trucks</Link>
              <Link to="/large-trucks">Heavy Trucks</Link>
              <Link to="/accessories">Accessories</Link>
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
            <Link to="/AboutUs">About Us</Link>

            <Link to="/contact">Contact Us</Link>
            <Link to="/Testemonials">Testemonial</Link>
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
              <Link to="/TruckRental" onClick={() => setMenuOpen(false)}>
                Truck Rental
              </Link>
              <Link to="/Logistics" onClick={() => setMenuOpen(false)}>
                Logistics
              </Link>
              <Link to="/CustomerSupport" onClick={() => setMenuOpen(false)}>
                Customer Support
              </Link>
            </div>
          )}
        </div>

        <div className="mobile-dropdown">
          <p onClick={() => toggleDropdown("products")}>Products</p>
          {openDropdown === "products" && (
            <div>
              <Link to="/medium-trucks" onClick={() => setMenuOpen(false)}>
                Light Trucks
              </Link>
              <Link to="/large-trucks" onClick={() => setMenuOpen(false)}>
                Heavy Trucks
              </Link>
              <Link to="/accessories" onClick={() => setMenuOpen(false)}>
                Accessories
              </Link>
            </div>
          )}
        </div>

        <div className="mobile-dropdown">
          <p onClick={() => toggleDropdown("about")}>About Us</p>
          {openDropdown === "about" && (
            <div>
              <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>
                Company
              </Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
              <Link to="/Testemonials" onClick={() => setMenuOpen(false)}>
                Testemonial
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
