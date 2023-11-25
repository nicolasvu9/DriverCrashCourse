import mockExam from "../models/mockExam.js";
import mockExamQuestion from "../models/mockExamQuestion.js";

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
