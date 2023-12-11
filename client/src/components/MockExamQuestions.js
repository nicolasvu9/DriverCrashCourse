import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get URL parameters
import "./MockExamQuestions.css";
import Timer from "./Timer"; // Assuming the Timer component is in the same directory
import calculateScore from "./scoreCalculator";
/*MockExamQuestions*/
import CongratulationsPage from "./CongratulationsPage";

import Cookies from 'js-cookie';

const MockExamQuestions = ({ onBackButtonClick, mockExamId }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(3600);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [showCongratulations, setShowCongratulations] = useState(false);
  const accessToken = Cookies.get('access_token');
  

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/api/mockexams/questions/${mockExamId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': Cookies.get('access_token'),
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }

        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions", error);
      }
    };

    fetchQuestions();
}, [mockExamId, accessToken]);


const handleTimeUp = () => {
  //console.log("Time is up!");
  alert("Time is up!");
  submitResult();
  setShowCongratulations(true);
};

const handleNextQuestion = () => {
  setCurrentQuestionIndex((prevIndex) =>
    prevIndex + 1 < questions.length ? prevIndex + 1 : prevIndex
  );
  setSelectedChoices((prevChoices) => {
    const updatedChoices = { ...prevChoices };
    updatedChoices[currentQuestionIndex + 1] = updatedChoices[currentQuestionIndex + 1] || null;
    return updatedChoices;
  });
};

const handlePreviousQuestion = () => {
  setCurrentQuestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  setSelectedChoices((prevChoices) => {
    const updatedChoices = { ...prevChoices };
    updatedChoices[currentQuestionIndex - 1] = updatedChoices[currentQuestionIndex - 1] || null;
    return updatedChoices;
  });
};


  const handleBackButtonClick = () => {
    onBackButtonClick(); // Call the provided callback to go back to MockExamPage
  };

  const submitResult = async () => {
    try {
      
      const response = await fetch(`/api/mockexams/results/${mockExamId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'x-access-token': Cookies.get('access_token'),
        },
        body: JSON.stringify({
          result: calculateScore(questions, selectedChoices),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit result");
      }

      // Handle success, e.g., navigate to another page or show a success message
      //console.log("Result submitted successfully!");
      // Example: navigate to the congratulations page
      //navigate(`/congratulations/${mockExamId}`);
    } catch (error) {
      console.error("Error submitting result", error);
    }
  };

  const handleSubmit = () => {
    // Check if all questions are answered
    const isEveryQuestionAnswered = questions.every(
      (_, index) => selectedChoices[index] !== undefined && selectedChoices[index] !== null
    );
  
    if (!isEveryQuestionAnswered) {
      alert("Please answer all questions before submitting.");
      return;
    }
  
    submitResult();
    setShowCongratulations(true);
  };
  

  const handleChoiceChange = (choice) => {
    setSelectedChoices({
      ...selectedChoices,
      [currentQuestionIndex]: choice,
    });
  };

  return (
    <div className="mock-exam-questions">
      {showCongratulations ? (
        <CongratulationsPage
        score={calculateScore(questions, selectedChoices)}
        onBackToMockExam={onBackButtonClick} // Pass the callback
      />
      ) : (
        <div>
          <Timer
            initialTime={3600}
            onTimeUpdate={(updatedTime) => setTimer(updatedTime)
            }
            onTimeUp={handleTimeUp}
          />

<div className="mock-question-card">
  {questions.length > 0 && currentQuestionIndex < questions.length ? (
    <div>
      <h3 className="question">
        Question {currentQuestionIndex + 1}
      </h3>
      <p>{questions[currentQuestionIndex].text}</p>
      <form className="choices">
        {questions[currentQuestionIndex].choices.map((choice) => (
          <div key={choice.choice_text} className="choice">
            <input
              type="radio"
              id={`choice${choice.choice_text}`}
              name="choices"
              value={choice.choice_text}
              checked={
                selectedChoices[currentQuestionIndex] === choice.choice_text
              }
              onChange={() => handleChoiceChange(choice.choice_text)}
            />
            <label htmlFor={`choice${choice.choice_text}`}>
              {choice.choice_text}
            </label>
          </div>
        ))}
      </form>
    </div>
  ) : (
    <p>No more questions. Test completed!</p>
  )}
</div>

          <div className="nav-buttons">
            {currentQuestionIndex > 0 && (
              <button className="nav-button" onClick={handlePreviousQuestion}>
                {"<"}
              </button>
            )}

            {currentQuestionIndex < questions.length - 1 ? (
              <button className="nav-button" onClick={handleNextQuestion}>
                {">"}
              </button>
            ) : (
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
          <div className="back">
            <button className="back-button" onClick={handleBackButtonClick}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
  <Footer />;
};
export default MockExamQuestions;
