// CongratulationsPage.js

import React from "react";

const CongratulationsPage = ({ score }) => {
  return (
    <div>
      <h2>Congratulations! You have finished all the questions!</h2>
      <p>Your score is: {score}</p>
    </div>
  );
};

export default CongratulationsPage;
