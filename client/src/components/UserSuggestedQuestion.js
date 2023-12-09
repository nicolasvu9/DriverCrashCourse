import React, { useState, useEffect } from 'react';
import './UserSuggestedQuestion.css';
import Cookies from 'js-cookie'

const UserSuggestedQuestion = ({ onClose }) => {
    const [questions, setQuestions] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('/api/suggestedquestions', {
                    headers: {
                        'x-access-token': Cookies.get('access_token')
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching questions', error);
            }
        };

        fetchQuestions();
    }, []);

    const editSuggestedQuestion = (questionId) => {
        const question = questions.find(q => q._id === questionId);
        setSelectedQuestion(question);
    };

    const approveQuestion = async (questionId) => {
        try {
            const response = await fetch(`/api/suggestedquestions/${questionId}/approve`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': Cookies.get('access_token')

                },
                body: JSON.stringify(questions.find(q => q._id === questionId))
            });
            if (!response.ok) throw new Error('Network response was not ok');
            setSelectedQuestion(null);
            setQuestions(questions.filter(question => question._id !== questionId));
        } catch (error) {
            console.error('Error approving question', error);
        }
    };

    const discardQuestion = async (questionId) => {
        const isConfirmed = window.confirm("Are you sure you want to discard this suggestion question?");
        if (isConfirmed) {
            try {
                const response = await fetch(`/api/suggestedquestions/${questionId}`, {
                    method: 'DELETE',
                    headers: {'x-access-token': Cookies.get('access_token')}
                });
                if (!response.ok) throw new Error('Network response was not ok');
                setSelectedQuestion(null);
                setQuestions(questions.filter(question => question._id !== questionId));
            } catch (error) {
                console.error('Error deleting question', error);
            }
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="question-list">
                    {questions.map((question, index) => (
                        <div key={question.id} className="question-item">
                            <span className="question-number">{index + 1}.</span>
                            <span className="question-text">{question.text}</span>
                            <button className="edit-button" onClick={() => editSuggestedQuestion(question._id)}>
                                View
                            </button>
                        </div>
                    ))}
                </div>

                {selectedQuestion && (
                    <div className="view-modal">
                        <div className="view-modal-content">
                            <button className="close-button" onClick={() => setSelectedQuestion(null)}>&times;</button>
                            <h3>{selectedQuestion.text}</h3>
                            <ul className="choice-list">
                                {selectedQuestion.choices.map((choice, index) => (
                                    <li key={index} className={choice.isCorrect ? 'choice-item correct' : 'choice-item'}>
                                        {choice.choice_text}
                                        {choice.isCorrect && <span className="correct-indicator"> (Correct)</span>}
                                    </li>
                                ))}
                            </ul>

                            <h3>Explanation:</h3>
                            <p>{selectedQuestion.correct_answer_explanation}</p>
                            <div className="action-buttons">
                                <button onClick={() => approveQuestion(selectedQuestion._id)}>Approve</button>
                                <button onClick={() => discardQuestion(selectedQuestion._id)}>Discard</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default UserSuggestedQuestion;

