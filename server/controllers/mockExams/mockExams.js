import mockExam from "../../models/mockExams/mockExam.js";
import mockExamResults from "../../models/mockExams/mockExamResults.js";

import mockExamQuestion from "../../models/mockExams/mockExamQuestion.js";

export async function getMockExams() {
  return await mockExam.find({});
}

export async function addMockExam(data) {
  try {
    const newMockExam = new mockExam(data);
    const savedMockExam = await newMockExam.save();
    return savedMockExam;
  } catch (err) {
    console.error("error adding new mock exam", err);
    throw err;
  }
}

export async function editMockExam(id, data) {
  try {
    const updatedMockExam = await mockExam.findOneAndReplace(
      { _id: id },
      data,
      { new: true, overwrite: true, runValidators: true }
    );
    return updatedMockExam;
  } catch (err) {
    console.error("error replacing mock exam", err);
    throw err;
  }
}

export async function deleteMockExam(id) {
  try {
    const deletedMockExam = await mockExam.findByIdAndDelete(id);
    await mockExamQuestion.deleteMany({ mock_exam_id: id });
    return deletedMockExam;
  } catch (err) {
    console.error("error deleting mock exam", err);
    throw err;
  }
}

export async function submitMockExamResult(examId, result, userId) {
  try {
    const updated = await mockExamResults.findOneAndUpdate(
      {
        mock_exam_id: examId,
        user_id: userId,
      },
      { $max: { top_result: result } },
      { upsert: true, new: true }
    );
    return updated;
  } catch (err) {
    console.error("error deleting mock exam", err);
    throw err;
  }
}
