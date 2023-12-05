import React, { useState, useEffect } from "react";
import "./progressPage.css";
import ProgressBar from "./progressBar.js";
import Footer from "./Footer";
import Cookies from "js-cookie";

const ProgressPage = () => {
  const [progressData, setProgressData] = useState(null);
  const [showDonePage, setShowDonePage] = useState(false);

  useEffect(() => {
    // Simulated progress data
    const simulatedData = {
      practiceQuestionsProgress: {
        completedPracticeQuestions: 20,
        totalPracticeQuestions: 50,
      },
      mockExamsTopResults: [
        { _id: "mockExam1", top_result: 100},
        // Add more mock exam data as needed
      ],
      // Add similar data for FlashCard as needed
    };

    setProgressData(simulatedData);
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
            <div className="bubble1" >
              Practice Question: {Math.round((progressData.practiceQuestionsProgress.completedPracticeQuestions / progressData.practiceQuestionsProgress.totalPracticeQuestions) * 100)}%
            </div>
            <ProgressBar stopValue={Math.round((progressData.practiceQuestionsProgress.completedPracticeQuestions / progressData.practiceQuestionsProgress.totalPracticeQuestions) * 100)} />
          </div>

          <div className="div2">
            {progressData.mockExamsTopResults.map((mockExamResult) => (
              <div key={mockExamResult._id}>
                <div className="bubble2" >
                  Mock Exam Top Result: {mockExamResult.top_result}%
                </div>
                <ProgressBar stopValue={mockExamResult.top_result} />
              </div>
            ))}
          </div>

          {/* Add similar logic for FlashCard as needed */}
        </>
      )}

    </div>
  );
};

export default ProgressPage;
