import React, { useState, useEffect } from "react";
import "./PracticeQuestionDone.css";
import Cookies from "js-cookie";
const PracticeQuestionDone = ({ onGoBack }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchCompletedQuestions = async () => {
      try {
        const response = await fetch("/api/practicequestions/", {
          headers: {
            'x-access-token': Cookies.get('access_token')
            // Add other headers as needed
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch completed practice questions");
        }
  
        const data = await response.json();
        setQuestions(data.filter((question) => question.isCompleted));
      } catch (error) {
        console.error("Error fetching completed practice questions", error);
      }
    };
  
    fetchCompletedQuestions();
  }, []);
  

  return (
    <div className="page">
      <h2>Practice Questions Done</h2>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>{question.text}</li>
        ))}
      </ul>

      {/* "Go Back" button */}
      <button className="button" onClick={onGoBack}>
        Back
      </button>
    </div>
  );
};

export default PracticeQuestionDone;
