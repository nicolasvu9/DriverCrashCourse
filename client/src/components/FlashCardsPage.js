import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './FlashCardsPage.css';
import TopNav from './TopNav';
import Footer from './Footer';

const FlashCardsPage = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const shuffleArray = (array) => {
    // Use the Fisher-Yates algorithm to shuffle the array in-place
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const fetchFlashcards = async () => {
    try {
      const response = await fetch('/api/flashcards', {
        headers: {
          'x-access-token': Cookies.get('access_token'),
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      shuffleArray(data); //shuffles
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
    <div>
      <TopNav />
      <div className="flashcards-container">
        <div
          className={`flashcard ${isFlipped ? 'flipped' : ''}`}
          onClick={handleCardFlip}
        >
          <div className="front">{flashcards[currentCardIndex]?.text}</div>
          <div className="back">{flashcards[currentCardIndex]?.answer}</div>
        </div>
        <br></br>
        <br></br>
        <div className="button-container">
          <button onClick={handlePrevCard}>Previous</button>
          <button onClick={handleNextCard}>Next</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FlashCardsPage;
