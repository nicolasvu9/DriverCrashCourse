// DashboardCard.js
import React, { useState } from "react";
import "./Dashboard.css";

const DashboardCard = ({ title, value }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`dashboard-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-content">
        <h2>{title}</h2>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
