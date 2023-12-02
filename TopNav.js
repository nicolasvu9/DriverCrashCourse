import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";

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
        <Link to="/video" onClick={() => setIsMenuOpen(false)}>
          Video
        </Link>
        <Link to="/logout" onClick={() => setIsMenuOpen(false)}>
          LogOut
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
