const calculateScore = (questions, selectedChoices) => {
  let correct_question = 0;
  let total = 0;
  questions.forEach((question, index) => {
    const selectedChoiceText = selectedChoices[index];
    const correctChoice = question.choices.find(choice => choice.isCorrect);
    total+=1;
    if (selectedChoiceText === correctChoice.choice_text) {
      // Increase the score if the selected choice is correct
      correct_question+= 1;
    }
  });
  
  const percentageCorrect = total > 0 ? (correct_question / total) * 100 : 0;


  return percentageCorrect;
};

export default calculateScore;
