// components/TopNav.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from '../utils/auth'; // Import the logout function
import "./TopNav.css";
import logo from "./logo.png";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout(); // Call the logout function
  };
  return (
    <div className={`topnav ${isMenuOpen ? "open" : ""}`}>
      <div className="icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        
      </div>
      <img src={logo} alt="Logo" className="logo" />
      <div className="topnavguide">
        <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
          DashBoard
        </Link>
        <Link to="/practice" onClick={() => setIsMenuOpen(false)}>
          Practice
        </Link>
        <Link to="/exam" onClick={() => setIsMenuOpen(false)}>
          Exam
        </Link>
        <Link to="/flashcard" onClick={() => setIsMenuOpen(false)}>
          FlashCard
        </Link>
        <Link to="/progress" onClick={() => setIsMenuOpen(false)}>
          Progress
        </Link>
        <Link to="/suggestion" onClick={() => setIsMenuOpen(false)}>
          Suggestion
        </Link>
        <Link to="/Video" onClick={() => setIsMenuOpen(false)}>
          Resources
        </Link>
        <Link to="/logout" onClick={handleLogout}>
          LogOut
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
