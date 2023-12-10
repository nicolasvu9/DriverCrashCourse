import React, { useState, useEffect } from 'react';
import './FlashCardsPage.css'; // Create a CSS file for styling
import TopNav from './TopNav';

const FlashCardsPage = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const fetchFlashcards = async () => {
    try {
      const response = await fetch('/api/flashcards'); // Replace with your actual endpoint

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setFlashcards(data);
    } catch (error) {
      console.error('Error fetching flashcards', error);
    }
  };

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === flashcards.length - 1 ? 0 : prevIndex + 1
    );
    setIsFlipped(false);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
    setIsFlipped(false);
  };

  const handleCardFlip = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };

  return (
    <div className="flashcards-container">
        <TopNav />
      <div
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardFlip}
      >
        <div className="front">{flashcards[currentCardIndex]?.text}</div>
        <div className="back">{flashcards[currentCardIndex]?.answer}</div>
      </div>
      <div className="button-container">
        <button onClick={handlePrevCard}>Previous</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
};

export default FlashCardsPage;
