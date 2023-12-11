import React, { useState, useEffect } from "react";
import "./progressPage.css";
import ProgressBar from "./progressBar.js";
import Footer from "./Footer";
import Cookies from "js-cookie";
import TopNav from "./TopNav.js";
const ProgressPage = () => {
  const [progressData, setProgressData] = useState(null);
  const [showDonePage, setShowDonePage] = useState(false);

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        const response = await fetch("/api/statistics", {
          method: "GET",
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
    <div >
      <TopNav/>
      <div className="Progress-flex-container">
      {!showDonePage && progressData && (
        <>
          <div className="div1">
            <div className="bubble1">
              Practice Question: {Math.round((progressData.practiceQuestionsProgress.completedPracticeQuestions / progressData.practiceQuestionsProgress.totalPracticeQuestions) * 100)}%
            </div>
            <ProgressBar stopValue={Math.round((progressData.practiceQuestionsProgress.completedPracticeQuestions / progressData.practiceQuestionsProgress.totalPracticeQuestions) * 100)} />
          </div>

          <div className="div2">
            {Array.isArray(progressData.mockExamsTopResults.mockExamsTopResults) &&
              progressData.mockExamsTopResults.mockExamsTopResults.length > 0 ? (
                progressData.mockExamsTopResults.mockExamsTopResults
                  .slice()
                  .sort((a, b) => b.top_result - a.top_result)
                  .slice(0, 1)
                  .map((mockExamResult) => (
                    <div key={mockExamResult._id}>
                      <div className="bubble2">
                        Mock Exam: {mockExamResult.mock_exam_id.name}<br></br> Top Result: {mockExamResult.top_result}%
                      </div>
                      <ProgressBar stopValue={mockExamResult.top_result} />
                    </div>
                  ))
              ) : (
                // Default value when no mock exam data is available
                <div>
                  <div className="bubble2">
                    Mock Exam: No data available<br></br> Top Result: 0%
                  </div>
                  <ProgressBar stopValue={0} />
                </div>
              )}
          </div>
        </>
      )}
      </div>
      <Footer />
    </div>
  );
};

export default ProgressPage;
