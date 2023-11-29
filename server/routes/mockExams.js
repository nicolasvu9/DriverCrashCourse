import { Router } from "express";
import {
  getMockExams,
  addMockExam,
  deleteMockExam,
  editMockExam,
  submitMockExamResult,
} from "../controllers/mockExams/mockExams.js";

import {
  getMockExamQuestions,
  addMockExamQuestion,
  editMockExamQuestion,
  deleteMockExamQuestion,
} from "../controllers/mockExams/mockExamQuestions.js";

import { verifyToken, isAdmin } from "../middlewares/auth.js";

const router = Router();

// Get all mock exams
router.get("/", [verifyToken], async function (_req, res) {
  try {
    const mockExams = await getMockExams();
    res.send(mockExams);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Add a mock exam
router.post("/", [verifyToken, isAdmin], async function (req, res) {
  try {
    const newPracticeQuestion = await addMockExam(req.body);
    res.send(newPracticeQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Modify a mock exam
router.put("/:_id", [verifyToken, isAdmin], async function (req, res) {
  try {
    const documentId = req.params._id;
    const updatedPracticeQuestion = await editMockExam(documentId, req.body);
    res.send(updatedPracticeQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Delete a mock exam
router.delete("/:_id", [verifyToken, isAdmin], async function (req, res) {
  try {
    const mockExamId = req.params._id;
    const deleteResponse = await deleteMockExam(mockExamId);
    res.send(deleteResponse);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Get mock exam questions with its id

router.get("/questions/:examid", [verifyToken], async function (req, res) {
  try {
    const exam_id = req.params.examid;
    const mockExamQuestions = await getMockExamQuestions(exam_id);
    res.send(mockExamQuestions);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Add mock exam question

router.post("/questions", [verifyToken, isAdmin], async function (req, res) {
  try {
    const newPracticeQuestion = await addMockExamQuestion(req.body);
    res.send(newPracticeQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Modify mock exam question

router.put(
  "/questions/:_id",
  [verifyToken, isAdmin],
  async function (req, res) {
    try {
      const documentId = req.params._id;
      const updatedPracticeQuestion = await editMockExamQuestion(
        documentId,
        req.body
      );
      res.send(updatedPracticeQuestion);
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  }
);

// Delete mock exam question
router.delete(
  "/questions/:_id",
  [verifyToken, isAdmin],
  async function (req, res) {
    try {
      const documentId = req.params._id;
      const deleteResponse = await deleteMockExamQuestion(documentId);
      res.send(deleteResponse);
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  }
);

// Submit exam results
router.post("/results/:examid", [verifyToken], async function (req, res) {
  try {
    const mock_exam_id = req.params.examid;
    const user_id = req.userId;
    const result = req.body.result;
    const mockExamQuestions = await submitMockExamResult(
      mock_exam_id,
      result,
      user_id
    );
    res.send(mockExamQuestions);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});
export default router;
