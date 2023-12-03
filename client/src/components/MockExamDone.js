// MockExamDone.js
import React from "react";
import "./MockExamDone.css"; // Adjust the path as needed

const MockExamDone = ({ onGoBack }) => {
  return (
    <div className="mock-exam-done">
      {/* Customize content for Mock Exam Done */}
      Mock Exam Done
      {/* Add additional content as needed */}
      <button className="button" onClick={onGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default MockExamDone;
