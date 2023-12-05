import React from "react";

const CongratulationsPage = ({ score, onBackToMockExam }) => {
  return (
    <div>
      <h2>Congratulations! You have finished all the questions!</h2>
      <p>Your score is: {score}</p>
      <button onClick={onBackToMockExam}>Back to Mock Exam</button>
    </div>
  );
};

export default CongratulationsPage;