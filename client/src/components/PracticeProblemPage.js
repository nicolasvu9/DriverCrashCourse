import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './PracticeProblemPage.css';
import TopNav from './TopNav';

const PracticeProblemPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const shuffleArray = (array) => {
        // Use the Fisher-Yates algorithm to shuffle the array in-place
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const fetchPracticeQuestions = async () => {
        try {
            const response = await fetch('/api/practicequestions/', {
                headers: {
                    'x-access-token': Cookies.get('access_token'),
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            
            // Shuffle the order of questions
            shuffleArray(data);
            
            setQuestions(data);
        } catch (error) {
            console.error('Error fetching practice questions', error);
        }
    };

    const setQuestionAsCompleted = async (questionId) => {
        try {
            const response = await fetch(`/api/practicequestions/${questionId}/completed`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': Cookies.get('access_token'),
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Question marked as completed:', data);

            // Update the isCompleted field of the question locally
            setQuestions((prevQuestions) =>
                prevQuestions.map((question) =>
                    question._id === questionId ? { ...question, isCompleted: true } : question
                )
            );
        } catch (error) {
            console.error('Error marking question as completed', error);
        }
    };

    const handleNextQuestion = () => {
        const currentQuestion = questions[currentQuestionIndex];
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedChoice(null);
        setIsCorrect(null);
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
        setSelectedChoice(null);
        setIsCorrect(null);
    };

    const handleSelectChoice = (choice) => {
        setSelectedChoice(choice);
    };

    const handleSubmitAnswer = async () => {
        if (selectedChoice) {
            const currentQuestion = questions[currentQuestionIndex];
            setIsCorrect(selectedChoice.isCorrect);

            if (selectedChoice.isCorrect) {
                // Send a POST request only if the answer is correct
                setQuestionAsCompleted(currentQuestion._id);
            }
        }
    };


    useEffect(() => {
        fetchPracticeQuestions();
    }, []);

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    

    const renderExplanation = () => {
        const currentQuestion = questions[currentQuestionIndex];
        if (isCorrect !== null && isCorrect && currentQuestion.correct_answer_explanation) {
            return (
                <div className="explanation-container">
                    <h3>Explanation:</h3>
                    <p>{currentQuestion.correct_answer_explanation}</p>
                </div>
            );
        }
        return null;
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="container">
            <TopNav/>

            <h2 className="page-title">Practice Problem Page</h2>
            
            <div className="problem-container">
                <p>{currentQuestion.text}</p>
                <ul className="choices-list">
                    {currentQuestion.choices.map((choice, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelectChoice(choice)}
                            className={`choice-item ${
                                selectedChoice === choice ? 'selected' : ''
                            }`}
                        >
                            {choice.choice_text}
                        </li>
                    ))}
                </ul>
                <div className="button-container">
                    <button
                        onClick={handlePreviousQuestion}
                        disabled={currentQuestionIndex === 0}
                    >
                        Previous
                    </button>
                    <button onClick={handleSubmitAnswer}>Submit Answer</button>
                    <button
                        onClick={handleNextQuestion}
                        disabled={currentQuestionIndex === questions.length - 1}
                    >
                        Next
                    </button>
                </div>
                {isCorrect !== null && (
                    <p className="feedback-message">
                        {isCorrect ? 'Correct!' : 'Incorrect. Try again.'}
                    </p>
                )}
                {renderExplanation()}
            </div>
        </div>
    );
};

export default PracticeProblemPage;
