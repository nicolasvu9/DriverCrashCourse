import React, { useState } from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";

const PracticeQuestionsPage = () => {
  const questions = [
    {
      id: 1,
      text: "What is the capital of France?",
      choices: [
        { id: "A", text: "Berlin" },
        { id: "B", text: "Paris" },
        { id: "C", text: "London" },
        { id: "D", text: "Rome" },
      ],
      correctChoice: "B",
    },
    {
      id: 2,
      text: "Which planet is known as the Red Planet?",
      choices: [
        { id: "A", text: "Venus" },
        { id: "B", text: "Mars" },
        { id: "C", text: "Jupiter" },
        { id: "D", text: "Saturn" },
      ],
      correctChoice: "B",
    },
    // Add more questions as needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
    );
    setShowCorrectAnswers(false);
  };

  const handleBack = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 0
    );
    setShowCorrectAnswers(false);
  };

  const handleAnswerSelect = (choice) => {
    setSelectedAnswer((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: choice,
    }));
  };

  const handleSubmit = () => {
    setShowCorrectAnswers(true);
  };

  return (
    <div align="center">
        <TopNav />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="overlay-box">
      <h1>Practice Questions</h1>
      <br></br>
      <div>
        <h3>{questions[currentQuestionIndex].text}</h3>
          {questions[currentQuestionIndex].choices.map((choice) => (
            <div key={choice.id}>
              <label>
                <input
                  type="radio"
                  name={`question${questions[currentQuestionIndex].id}`}
                  value={choice.id}
                  onChange={() => handleAnswerSelect(choice.id)}
                  checked={selectedAnswer[currentQuestionIndex] === choice.id}
                  disabled={showCorrectAnswers}
                />
                {choice.text}
              </label>
            </div>
          ))}
    
        {showCorrectAnswers && (
          <p>Correct Answer: {questions[currentQuestionIndex].correctChoice}</p>
        )}
      </div>
      
      <div className="button-container">
        <button
          className="nav-button"
          onClick={handleBack}
          disabled={currentQuestionIndex === 0 || showCorrectAnswers}
        >
          Back
        </button>
        {!showCorrectAnswers && (
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        )}
        
        {!showCorrectAnswers && (
          <button
            className="nav-button"
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </button>
        )}
        
      </div>
    </div>

    <Footer/>
    </div>
  );
};

export default PracticeQuestionsPage;
