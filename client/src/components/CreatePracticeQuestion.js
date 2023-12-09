import React, { useState } from 'react';
import './CreatePracticeQuestion.css';
import Cookies from 'js-cookie';

const CreatePracticeQuestion = ({ onClose, question }) => {
    const [questionText, setQuestionText] = useState(question ? question.text : '');
    const [choices, setChoices] = useState(question ? question.choices : [
        { choice_text: '', isCorrect: false },
        { choice_text: '', isCorrect: false },
        { choice_text: '', isCorrect: false },
        { choice_text: '', isCorrect: false }
    ]);
    const [explanation, setExplanation] = useState(question ? question.correct_answer_explanation : '');

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
            text: questionText,
            choices,
            correct_answer_explanation: explanation
        };

        try {
            const url = question
                ? `/api/practicequestions/${question._id}` // If editing, use the PUT endpoint
                : '/api/practicequestions'; // If creating new, use the POST endpoint

            const method = question ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': Cookies.get('access_token')
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            onClose();
        } catch (error) {
            console.error('Error submitting question', error);
        }
    };

    return (
        <div className="create-question-form" >
            <form onSubmit={handleSubmit}>
                <label>Question</label>
                <textarea value={questionText} onChange={(e) => setQuestionText(e.target.value)} />

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