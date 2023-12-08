const calculateScore = (questions, selectedChoices) => {
  let score = 0;

  questions.forEach((question, index) => {
    const selectedChoiceText = selectedChoices[index];
    const correctChoice = question.choices.find(choice => choice.isCorrect);

    if (selectedChoiceText === correctChoice.choice_text) {
      // Increase the score if the selected choice is correct
      score += 1;
    }
  });

  return score;
};

export default calculateScore;
