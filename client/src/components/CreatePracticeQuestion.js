import React, { useState } from 'react';
import './CreatePracticeQuestion.css';

const CreatePracticeQuestion = ({ onClose }) => {
    const [question, setQuestion] = useState('');
    const [choices, setChoices] = useState([
        { choice_text: '', isCorrect: false },
        { choice_text: '', isCorrect: false },
        { choice_text: '', isCorrect: false },
        { choice_text: '', isCorrect: false }
    ]);
    const [explanation, setExplanation] = useState('');

    const handleChoiceChange = (index, event) => {
        if (event.target.name === 'isCorrect') {
            setChoices(choices.map((choice, i) => ({
                ...choice,
                isCorrect: i === index
            })));
        } else {
            setChoices(choices.map((choice, i) => (
                i === index ? { ...choice, [event.target.name]: event.target.value } : choice
            )));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            text: question,
            choices,
            correct_answer_explanation: explanation
        };

        try {
            const response = await fetch('/api/practicequestions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            onClose(); // Close the modal after submission
        } catch (error) {
            console.error('Error submitting question', error);
        }
    };

    return (
        <div className="create-question-form">
            <form onSubmit={handleSubmit}>
                <label>Question</label>
                <textarea value={question} onChange={(e) => setQuestion(e.target.value)} />

                {choices.map((choice, index) => (
                    <div key={index} className="choice-item">
                        <label>Choice {index + 1}</label>
                        <input
                            type="text"
                            name="choice_text"
                            value={choice.choice_text}
                            onChange={(e) => handleChoiceChange(index, e)}
                        />
                        <label>
                            <input
                                type="radio"
                                name="isCorrect"
                                checked={choice.isCorrect}
                                onChange={(e) => handleChoiceChange(index, e)}
                            />
                            Correct
                        </label>
                    </div>
                ))}

                <label>Explanation</label>
                <textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreatePracticeQuestion;