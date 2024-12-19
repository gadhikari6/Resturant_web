import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

// Import the logo image
import logo from "../assets/nepali_resturant.png";

const Header = () => {
  return (
    <header className="header">
      {/* Logo and Restaurant Name */}
      <div className="logo-container">
        <img src={logo} alt="Ballu Dada Cottage Logo" className="logo" />
        <h1 className="restaurant-name">Ballu Dada Cottage</h1>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/">Menu</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
};

export default Header;
