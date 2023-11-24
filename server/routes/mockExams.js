import { Router } from "express";
import uploadImageMiddleware from "../middleware/fileUploadMiddleware.js";

import {
  getMockExams,
  addMockExam,
  deleteMockExam,
  editMockExam,
} from "../controllers/mockExams.js";

import {
  getMockExamQuestions,
  addMockExamQuestion,
  editMockExamQuestion,
  deleteMockExamQuestion,
} from "../controllers/mockExamQuestions.js";

const router = Router();

router.get("/", async function (_req, res) {
  const mockExams = await getMockExams();
  res.send(mockExams);
});

router.post("/", async function (req, res) {
  const newPracticeQuestion = await addMockExam(req.body);
  res.send(newPracticeQuestion);
});

router.put("/:_id", async function (req, res) {
  const documentId = req.params._id;
  const updatedPracticeQuestion = await editMockExam(documentId, req.body);
  res.send(updatedPracticeQuestion);
});

router.delete("/:_id", async function (req, res) {
  const mockExamId = req.params._id;
  const deleteResponse = await deleteMockExam(mockExamId);
  res.send(deleteResponse);
});

router.get("/questions/:examid", async function (req, res) {
  const exam_id = req.params.examid;
  const mockExamQuestions = await getMockExamQuestions(exam_id);
  res.send(mockExamQuestions);
});

router.post("/questions", uploadImageMiddleware, async function (req, res) {
  try {
    const { text, choices, correct_answer_explanation } = req.body;
    const data = {
      text,
      choices: JSON.parse(choices),
      correct_answer_explanation,
    };
    if (req.file) {
      data.image = req.file.filename;
    }
    const newMockExamQuestion = await addMockExamQuestion(data);
    res.send(newMockExamQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.put("/questions/:_id", uploadImageMiddleware, async function (req, res) {
  try {
    const id = req.params._id;
    const { text, choices, correct_answer_explanation } = req.body;
    const data = {
      text,
      choices: JSON.parse(choices),
      correct_answer_explanation,
    };
    if (req.file) {
      data.image = req.file.filename;
    }
    const updatedMockExamQuestion = await editMockExamQuestion(id, data);
    res.send(updatedMockExamQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.delete("/questions/:_id", async function (req, res) {
  const documentId = req.params._id;
  const deleteResponse = await deleteMockExamQuestion(documentId);
  res.send(deleteResponse);
});

export default router;
