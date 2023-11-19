import mockExamQuestion from "../models/mockExamQuestion.js";

export async function getMockExamQuestions(examId) {
  return await mockExamQuestion.find({ mock_exam_id: examId });
}

export async function addMockExamQuestion(data) {
  try {
    // TO-DO: Validate exam id to see if it exists
    const newMockExamQuestion = new mockExamQuestion(data);
    const savedQuestion = await newMockExamQuestion.save();
    return savedQuestion;
  } catch (err) {
    console.error("error adding new practice question", err);
  }
}

export async function editMockExamQuestion(id, data) {
  try {
    const updatedMockExamQuestion = await mockExamQuestion.findOneAndReplace(
      { _id: id },
      data,
      { new: true, overwrite: true, runValidators: true }
    );
    return updatedMockExamQuestion;
  } catch (err) {
    console.error("error adding new practice question", err);
  }
}

export async function deleteMockExamQuestion(id) {
  try {
    const deletedMockExamQuestion =
      await mockExamQuestion.findByIdAndDelete(id);
    return deletedMockExamQuestion;
  } catch (err) {
    console.error("error adding new practice question", err);
    return err;
  }
}
