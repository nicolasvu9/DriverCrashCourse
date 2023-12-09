// components/TopNav.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../utils/auth"; // Import the logout function
import "./TopNav.css";
import logo from "./logo.png";
import Cookies from "js-cookie";
const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        // Fetch user role from cookies or your authentication system
        const role = Cookies.get("user_role");
        setUserRole(role);
      } catch (error) {
        console.error("Error fetching user role", error);
      }
    };

    fetchUserRole();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout(); // Call the logout function
  };
  return (
    <div className={`user-topnav ${isMenuOpen ? "open" : ""}`}>
      <div className="user-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <img src={logo} alt="Logo" className="user-logo" />
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
        {userRole === "admin" && (
          <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
            Admin
          </Link>
        )}
        <Link to="/" onClick={handleLogout}>
          LogOut
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
