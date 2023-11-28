import practiceQuestion from "../models/practiceQuestion.js";
import questionProgression from "../models/questionProgression.js";

export async function getAdminPracticeQuestions() {
  try {
    return await practiceQuestion.find({});
  } catch (err) {
    console.error("error getting practice questions", err);
    throw err;
  }
}

export async function getUserPracticeQuestions(req) {
  try {
    const questionsProgression = await questionProgression.find({
      user_id: req.userId,
    });
    const questionIdsArray = questionsProgression.map(
      (completedQuestion) => completedQuestion.question_id
    );
    const practiceQuestionsWithProgress = await practiceQuestion.aggregate([
      {
        $addFields: {
          isCompleted: {
            $in: ["$_id", questionIdsArray],
          },
        },
      },
    ]);

    return practiceQuestionsWithProgress;
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

export async function setUserQuestionProgress(req) {
  try {
    const question_id = req.params._id;
    const data = {
      user_id: req.userId,
      question_id,
    };
    const newQuestionProgression = new questionProgression(data);
    const savedQuestionProgression = await newQuestionProgression.save();
    return savedQuestionProgression;
  } catch (err) {
    console.error("error adding practice question to completed for user", err);
    throw err;
  }
}
