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

import { verifyToken, isAdmin } from "../middlewares/auth.js";

const router = Router();

router.get("/", [verifyToken], async function (_req, res) {
  try {
    const mockExams = await getMockExams();
    res.send(mockExams);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.post("/", [verifyToken, isAdmin], async function (req, res) {
  try {
    const newPracticeQuestion = await addMockExam(req.body);
    res.send(newPracticeQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.put("/:_id", [verifyToken, isAdmin], async function (req, res) {
  try {
    const documentId = req.params._id;
    const updatedPracticeQuestion = await editMockExam(documentId, req.body);
    res.send(updatedPracticeQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.delete("/:_id", [verifyToken, isAdmin], async function (req, res) {
  try {
    const mockExamId = req.params._id;
    const deleteResponse = await deleteMockExam(mockExamId);
    res.send(deleteResponse);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.get("/questions/:examid", [verifyToken], async function (req, res) {
  try {
    const exam_id = req.params.examid;
    const mockExamQuestions = await getMockExamQuestions(exam_id);
    res.send(mockExamQuestions);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.post("/questions", [verifyToken, isAdmin], async function (req, res) {
  try {
    const newPracticeQuestion = await addMockExamQuestion(req.body);
    res.send(newPracticeQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

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

export default router;
