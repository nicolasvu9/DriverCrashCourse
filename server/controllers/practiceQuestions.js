import practiceQuestion from "../models/practiceQuestion.js";

export async function getPracticeQuestions() {
  try {
    return await practiceQuestion.find({});
  } catch (err) {
    console.error("error getting practice questions", err);
    throw err;
  }
}

export async function addPracticeQuestion(data) {
  try {
    const newPracticeQuestion = new practiceQuestion(data);
    const savedQuestion = await newPracticeQuestion.save();
    return savedQuestion;
  } catch (err) {
    console.error("error adding new practice question", err);
    throw err;
  }
}

export async function editPracticeQuestion(id, data) {
  try {
    const updatedPracticeQuestion = await practiceQuestion.findOneAndReplace(
      { _id: id },
      data,
      { new: true, overwrite: true, runValidators: true }
    );
    return updatedPracticeQuestion;
  } catch (err) {
    console.error("error adding new practice question", err);
    throw err;
  }
}

export async function deletePracticeQuestion(id) {
  try {
    const deletedPracticeQuestion =
      await practiceQuestion.findByIdAndDelete(id);
    return deletedPracticeQuestion;
  } catch (err) {
    console.error("error adding new practice question", err);
    throw err;
  }
}
