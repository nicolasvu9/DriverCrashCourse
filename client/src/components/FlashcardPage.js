import React, { useState } from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";
import "./FlashcardPage.css"; // Add your CSS file for styling

const FlashcardsPage = () => {
  const flashcardsData = [
    {
      id: 1,
      keyword: "What color is a stop sign?",
      definition:
        "Red",
    },
    {
      id: 2,
      keyword: "CSS",
      definition:
        "Cascading Style Sheets - a style sheet language for describing the look and formatting of a document written in HTML.",
    },
    // Add more flashcards as needed
  ];

  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);

  const handleNext = () => {
    setCurrentFlashcardIndex((prevIndex) =>
      prevIndex < flashcardsData.length - 1 ? prevIndex + 1 : prevIndex
    );
    setShowDefinition(false);
  };

  const handleBack = () => {
    setCurrentFlashcardIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 0
    );
    setShowDefinition(false);
  };

  const handleShow = () => {
    setShowDefinition(true);
  };

  return (
    <div className="flashcards-page">
      <TopNav />
      <div className="flexcontainer">
        <div className="overlaybox">
        <div className={`flashcard ${showDefinition ? "flipped" : ""}`}>
          <div className="flashcard-front">
            <h3> <br></br> <br></br><br></br> <br></br>{flashcardsData[currentFlashcardIndex].keyword}</h3>
          </div>
          <div className="flashcard-back">
            <h3> <br></br><br></br><br></br> {flashcardsData[currentFlashcardIndex].definition}</h3>
          </div>
        </div>
      
        <div className="button-container">
        <button
          onClick={handleBack}
          disabled={currentFlashcardIndex === 0 || showDefinition}
        >
          Back
        </button>
        
        {!showDefinition && (
          <button
            onClick={handleNext}
            disabled={currentFlashcardIndex === flashcardsData.length - 1}
          >
            Next
          </button>
        )}
      </div>
    </div>
    </div>

    <Footer/>
    </div>

  );
};

export default FlashcardsPage;
