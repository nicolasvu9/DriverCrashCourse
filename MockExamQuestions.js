import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get URL parameters
import "./MockExamQuestions.css";
import Timer from "./Timer"; // Assuming the Timer component is in the same directory
import calculateScore from "./scoreCalculator";
/*MockExamQuestions*/
import CongratulationsPage from "./CongratulationsPage";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MockExamQuestions = ({ onBackButtonClick, mockExamId }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(3600);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [showCongratulations, setShowCongratulations] = useState(false);
  const navigate = useNavigate();

  const dummyQuestions = [
    {
      id: 1,
      text: "What is the largest planet in our solar system?",
      choices: [
        { id: "A", text: "Earth" },
        { id: "B", text: "Jupiter" },
        { id: "C", text: "Mars" },
        { id: "D", text: "Venus" },
      ],
      correctChoiceId: "B",
    },
    {
      id: 2,
      text: "Who wrote the play 'Romeo and Juliet'?",
      choices: [
        { id: "A", text: "Charles Dickens" },
        { id: "B", text: "William Shakespeare" },
        { id: "C", text: "Jane Austen" },
        { id: "D", text: "Mark Twain" },
      ],
      correctChoiceId: "B",
    },
    {
      id: 3,
      text: "What is the capital of Japan?",
      choices: [
        { id: "A", text: "Beijing" },
        { id: "B", text: "Seoul" },
        { id: "C", text: "Tokyo" },
        { id: "D", text: "Bangkok" },
      ],
      correctChoiceId: "C",
    },
    // Add more dummy questions as needed
  ];

  useEffect(() => {
    // Use dummy questions for now
    setQuestions(dummyQuestions);
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex + 1 < questions.length ? prevIndex + 1 : prevIndex
    );
    setSelectedChoices((prevChoices) => {
      const updatedChoices = { ...prevChoices };
      updatedChoices[currentQuestionIndex] = updatedChoices[currentQuestionIndex] || null;
      return updatedChoices;
    });
  };
  
  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    setSelectedChoices((prevChoices) => {
      const updatedChoices = { ...prevChoices };
      updatedChoices[currentQuestionIndex] = updatedChoices[currentQuestionIndex] || null;
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
        },
        body: JSON.stringify({
          result: calculateScore(questions, selectedChoices),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit result");
      }

      // Handle success, e.g., navigate to another page or show a success message
      console.log("Result submitted successfully!");
      // Example: navigate to the congratulations page
      navigate(`/congratulations/${mockExamId}`);
    } catch (error) {
      console.error("Error submitting result", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  const handleSubmit = () => {
    // Check if all questions are answered
    const answeredQuestions = Object.keys(selectedChoices).length;
    const totalQuestions = questions.length;

    if (answeredQuestions < totalQuestions) {
      // If not all questions are answered, show alert and return
      alert("Please answer all questions before submitting.");
      return;
    }
    submitResult();
    // Proceed to the congratulations page
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
            onTimeUpdate={(updatedTime) => setTimer(updatedTime)}
          />

          <div className="question-card">
            {questions.length > 0 && currentQuestionIndex < questions.length ? (
              <div>
                <h3 className="question">
                  Question {currentQuestionIndex + 1}
                </h3>
                <p>{questions[currentQuestionIndex].text}</p>
                <form className="choices">
            {questions[currentQuestionIndex].choices.map((choice) => (
              <div key={choice.id} className="choice">
                <input
                  type="radio"
                  id={`choice${choice.id}`}
                  name="choices"
                  value={choice.id}
                  checked={
                    selectedChoices[currentQuestionIndex] === choice.id
                  }
                  onChange={() => handleChoiceChange(choice.id)}
                />
                <label htmlFor={`choice${choice.id}`}>{choice.text}</label>
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
