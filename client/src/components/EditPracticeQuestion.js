import React, { useState, useEffect } from 'react';
import CreatePracticeQuestion from './CreatePracticeQuestion';
import './EditPracticeQuestion.css';

const EditPracticeQuestion = ({ onClose }) => {
    const [questions, setQuestions] = useState([]);
    const [editingQuestion, setEditingQuestion] = useState(null);

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

    const handleEdit = (question) => {
        setEditingQuestion(question);
    };

    const handleDeleteClick = (questionId) => {
        //TODO: Maybe change to a custom popup to look prettier
        const isConfirmed = window.confirm("Are you sure you want to delete this question?");
        if (isConfirmed) {
            deleteQuestion(questionId);
        }
    };

    const deleteQuestion = async (questionId) => {
        try {
            const response = await fetch(`/api/practicequestions/${questionId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setQuestions(questions.filter(question => question._id !== questionId));
        } catch (error) {
            console.error('Error deleting question', error);
        }
    };

    const closeEditModal = () => {
        setEditingQuestion(null); // Close the edit modal
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="question-list">
                    {questions.map((question, index) => (
                        <div key={question._id} className="question-item">
                            <span className="question-number">{index + 1}.</span>
                            <span className="question-text">{question.text}</span>
                            <button className="edit-button" onClick={() => handleEdit(question)}>
                                Edit
                            </button>
                            <button className="delete-button" onClick={() => handleDeleteClick(question._id)}>Delete</button>

                        </div>
                    ))}
                </div>
            </div>

            {editingQuestion && (
                <div className="edit-modal">
                    <div className="edit-modal-content">
                        <CreatePracticeQuestion
                            question={editingQuestion}
                            onClose={closeEditModal}
                        />
                        <button className="close-button" onClick={closeEditModal}>&times;</button>

                    </div>
                </div>
            )}
        </div>
    );
};

export default EditPracticeQuestion;

