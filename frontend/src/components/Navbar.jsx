import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Bevanda Mobile Bar</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
