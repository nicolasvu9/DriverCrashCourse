import practiceQuestion from "../models/practiceQuestion.js";

export async function getPracticeQuestions() {
  return await practiceQuestion.find({});
}

export async function addNewPracticeQuestion(data) {
  try {
    const newPracticeQuestion = new practiceQuestion(data);
    const savedQuestion = await newPracticeQuestion.save();
    return savedQuestion;
  } catch (err) {
    console.error("error adding new practice question", err);
  }
}
