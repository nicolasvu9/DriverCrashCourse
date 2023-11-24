import suggestedQuestion from "../models/suggestedQuestion.js";
import { addPracticeQuestion } from "../controllers/practiceQuestions.js";

export async function getSuggestedQuestions() {
  try {
    return await suggestedQuestion.find({});
  } catch (err) {
    console.error("error getting suggested questions", err);
    throw err;
  }
}

export async function addSuggestedQuestion(data) {
  try {
    const newSuggestedQuestion = new suggestedQuestion(data);
    const savedQuestion = await newSuggestedQuestion.save();
    return savedQuestion;
  } catch (err) {
    console.error("error adding new suggested question", err);
    throw err;
  }
}

export async function editSuggestedQuestion(id, data) {
  try {
    const updatedSuggestedQuestion = await suggestedQuestion.findOneAndReplace(
      { _id: id },
      data,
      { new: true, overwrite: true, runValidators: true }
    );
    return updatedSuggestedQuestion;
  } catch (err) {
    console.error("error editing new suggested question", err);
    throw err;
  }
}

export async function deleteSuggestedQuestion(id) {
  try {
    const deletedSuggestedQuestion =
      await suggestedQuestion.findByIdAndDelete(id);
    return deletedSuggestedQuestion;
  } catch (err) {
    console.error("error deleting new suggested question", err);
    throw err;
  }
}

export async function approveSuggestedQuestion(id, data) {
  try {
    const response = await addPracticeQuestion(data);
    await suggestedQuestion.findByIdAndDelete(id);
    return response;
  } catch (err) {
    console.error("error approving suggested question", err);
  }
}
