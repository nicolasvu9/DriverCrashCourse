// scoreCalculator.js

const calculateScore = (questions, selectedChoices) => {
  let score = 0;

  questions.forEach((question, index) => {
    const selectedChoice = selectedChoices[index];
    if (
      selectedChoice &&
      question.choices.find((choice) => choice.choice_text === selectedChoice)
        ?.isCorrect
    ) {
      // Increase the score if the selected choice is correct
      score += 1;
    }
  });

  return score;
};

export default calculateScore;
