// ProgressPage.js
import React, { useState } from "react";
import "./progressPage.css";
import ProgressBar from "./progressBar.js";
import Footer from "./Footer";
import PracticeQuestionDone from "./PracticeQuestionDone";
import MockExamDone from "./MockExamDone";
import FlashCardDone from "./FlashCardDone";

const ProgressPage = () => {
  const [activePage, setActivePage] = useState("practice"); // Default to Practice Page
  const [showDonePage, setShowDonePage] = useState(false);

  const handleShowDonePage = (page) => {
    setActivePage(page);
    setShowDonePage(true);
  };

  const handleGoBack = () => {
    setShowDonePage(false);
  };

  return (
    <div className="flex-container">
      {!showDonePage && (
        <div className="div1">
          <div className="bubble" style={{ backgroundColor: "red" }}>
            Practice Question: 30%
          </div>
          <ProgressBar stopValue={30} />
          <button onClick={() => handleShowDonePage("practice")}>More</button>
        </div>
      )}

      {!showDonePage && (
        <div className="div2">
          <div className="bubble" style={{ backgroundColor: "#FFd700" }}>
            Mock Exam: 40%
          </div>
          <ProgressBar stopValue={40} />
          <button onClick={() => handleShowDonePage("mockExam")}>More</button>
        </div>
      )}

      {!showDonePage && (
        <div className="div3">
          <div className="bubble" style={{ backgroundColor: "lightgreen" }}>
            FlashCard: 100%
          </div>
          <ProgressBar stopValue={100} />
          <button onClick={() => handleShowDonePage("flashCard")}>More</button>
        </div>
      )}

      {showDonePage && activePage === "practice" && (
        <PracticeQuestionDone onGoBack={handleGoBack} />
      )}

      {showDonePage && activePage === "mockExam" && (
        <MockExamDone onGoBack={handleGoBack} />
      )}

      {showDonePage && activePage === "flashCard" && (
        <FlashCardDone onGoBack={handleGoBack} />
      )}
    </div>
  );
};

export default ProgressPage;
