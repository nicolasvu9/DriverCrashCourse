// scoreCalculator.js

const calculateScore = (questions, selectedChoices) => {
  let score = 0;

  questions.forEach((question, index) => {
    const selectedChoice = selectedChoices[index];
    const correctChoiceId = question.correctChoiceId;

    if (selectedChoice === correctChoiceId) {
      // Increase the score if the selected choice is correct
      score += 1;
    }
  });

  return score;
};

export default calculateScore;