import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingTopNav.css";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`topnav ${isMenuOpen ? "open" : ""}`}>
      <div className="icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="topnavguide">
        <Link to="/login" onClick={() => setIsMenuOpen(false)}>
          Login
        </Link>
        <Link to="/login" onClick={() => setIsMenuOpen(false)}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
