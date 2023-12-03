import React, { useState, useEffect } from "react";
import "./progressPage.css";
import ProgressBar from "./progressBar.js";
import Footer from "./Footer";
import Cookies from "js-cookie";

const ProgressPage = () => {
  const [progressData, setProgressData] = useState(null);
  const [showDonePage, setShowDonePage] = useState(false);

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        const response = await fetch("/api/statistics", {
          headers: {
            "x-access-token": Cookies.get("access_token"),
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch statistics");
        }

        const data = await response.json();
        setProgressData(data);
      } catch (error) {
        console.error("Error fetching statistics", error);
      }
    };

    fetchProgressData();
  }, []);

  const handleShowDonePage = (page) => {
    // Handle logic based on the selected page
    setShowDonePage(true);
  };

  const handleGoBack = () => {
    setShowDonePage(false);
  };

  return (
    <div className="flex-container">
      {!showDonePage && progressData && (
        <>
          <div className="div1">
            <div className="bubble" style={{ backgroundColor: "red" }}>
              Practice Question: {Math.round((progressData.practiceQuestionsProgress.completedPracticeQuestions / progressData.practiceQuestionsProgress.totalPracticeQuestions) * 100)}%
            </div>
            <ProgressBar stopValue={Math.round((progressData.practiceQuestionsProgress.completedPracticeQuestions / progressData.practiceQuestionsProgress.totalPracticeQuestions) * 100)} />
            <button onClick={() => handleShowDonePage("practice")}>More</button>
          </div>

          <div className="div2">
            {progressData.mockExamsTopResults.mockExamsTopResults.map((mockExamResult) => (
              <div key={mockExamResult._id}>
                <div className="bubble" style={{ backgroundColor: "#FFd700" }}>
                  Mock Exam: {mockExamResult.top_result}%
                </div>
                <ProgressBar stopValue={mockExamResult.top_result} />
                <button onClick={() => handleShowDonePage("mockExam")}>More</button>
              </div>
            ))}
          </div>

          {/* Add similar logic for FlashCard as needed */}
        </>
      )}

      {showDonePage && (
        <div>
          {/* Render your done pages based on the selected page */}
        </div>
      )}
    </div>
  );
};

export default ProgressPage;
