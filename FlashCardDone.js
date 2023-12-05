// FlashCardDone.js
import React from "react";
import "./FlashCardDone.css"; // Adjust the path as needed

const FlashCardDone = ({ onGoBack }) => {
  return (
    <div className="flash-card-done">
      {/* Customize content for Flash Card Done */}
      <h2>Flash Card Done</h2>
      {/* Add additional content as needed */}
      <button className="button" onClick={onGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default FlashCardDone;
