import { Router } from "express";
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
  const mockExamQuestions = await getMockExams();
  res.send(mockExamQuestions);
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

router.post("/questions", async function (req, res) {
  const newPracticeQuestion = await addMockExamQuestion(req.body);
  res.send(newPracticeQuestion);
});

router.put("/questions/:_id", async function (req, res) {
  const documentId = req.params._id;
  const updatedPracticeQuestion = await editMockExamQuestion(
    documentId,
    req.body
  );
  res.send(updatedPracticeQuestion);
});

router.delete("/questions/:_id", async function (req, res) {
  const documentId = req.params._id;
  const deleteResponse = await deleteMockExamQuestion(documentId);
  res.send(deleteResponse);
});

export default router;
