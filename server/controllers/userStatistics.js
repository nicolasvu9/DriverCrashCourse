import mockExamResult from "../models/mockExams/mockExamResults.js";
import practiceQuestion from "../models/practiceQuestions/practiceQuestion.js";
import questionProgression from "../models/practiceQuestions/questionProgression.js";

async function getPracticeQuestionProgression(user_id) {
  const totalPracticeQuestions = await practiceQuestion.countDocuments({});
  const completedPracticeQuestions = await questionProgression.countDocuments({
    user_id: user_id,
  });
  return {
    totalPracticeQuestions,
    completedPracticeQuestions,
  };
}

async function getMockExamTopResults(user_id) {
  const mockExamsTopResults = await mockExamResult
    .find({ user_id: user_id })
    .populate("mock_exam_id", "name");
  return { mockExamsTopResults };
}

export async function getStatistics(user_id) {
  const practiceQuestionsProgress =
    await getPracticeQuestionProgression(user_id);
  const mockExamsTopResults = await getMockExamTopResults(user_id);
  return {
    practiceQuestionsProgress,
    mockExamsTopResults,
  };
}
