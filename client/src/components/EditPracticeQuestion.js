import React, { useState, useEffect } from 'react';
import './EditPracticeQuestion.css';

const EditPracticeQuestion = ({ onClose }) => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('/api/practicequestions');
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

    const editQuestion = (questionId) => {
        // Placeholder for edit functionality
        // This could involve setting a state variable with the selected question's details and showing a form/modal for editing.
        console.log('Edit question with ID:', questionId);
        // onClose(); // Close the modal after editing (if applicable)
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
                        <button className="edit-button" onClick={() => handleEdit(question.id)}>
                            Edit
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
};

export default EditPracticeQuestion;

