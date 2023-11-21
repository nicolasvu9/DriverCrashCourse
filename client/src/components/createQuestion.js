import React, { useState } from 'react';

function CreatePracticeQuestion({ show, handleClose, handleSubmit }) {
  const [questionText, setQuestionText] = useState('');
  const [choices, setChoices] = useState([{ choice_text: '', isCorrect: false }]);
  const [explanation, setExplanation] = useState('');

  const handleChoiceChange = (index, event) => {
    const newChoices = choices.map((choice, i) => {
      if (i === index) {
        return { ...choice, [event.target.name]: event.target.value };
      }
      return choice;
    });
    setChoices(newChoices);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      text: questionText,
      choices: choices,
      correct_answer_explanation: explanation
    };
    handleSubmit(newQuestion);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={handleClose}>&times;</span>
        <h2>Create a New Practice Question</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Question:
            <input type="text" value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
          </label>
          {choices.map((choice, index) => (
            <label key={index}>
              Choice {index + 1}:
              <input type="text" name="choice_text" value={choice.choice_text} onChange={(e) => handleChoiceChange(index, e)} />
              <input type="checkbox" name="isCorrect" checked={choice.isCorrect} onChange={(e) => handleChoiceChange(index, { ...e, target: { ...e.target, value: e.target.checked } })} />
            </label>
          ))}
          <label>
            Explanation:
            <input type="text" value={explanation} onChange={(e) => setExplanation(e.target.value)} />
          </label>
          <button type="submit">Submit Question</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePracticeQuestion;