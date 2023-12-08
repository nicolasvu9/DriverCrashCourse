import { Router } from "express";
import {
  getAdminPracticeQuestions,
  addPracticeQuestion,
  editPracticeQuestion,
  deletePracticeQuestion,
  setUserQuestionProgress,
  getUserPracticeQuestions,
} from "../controllers/practiceQuestions/practiceQuestions.js";

import { verifyToken, isAdmin } from "../middlewares/auth.js";

const router = Router();

// Get all practice questions for admin view
router.get("/admin", [verifyToken, isAdmin], async function (req, res) {
  try {
    const practiceQuestions = await getAdminPracticeQuestions();
    res.send(practiceQuestions);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Get all practice questions and with user completion progress
router.get("/", [verifyToken], async function (req, res) {
  try {
    const practiceQuestions = await getUserPracticeQuestions(req);
    res.send(practiceQuestions);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Add new practice question
router.post("/", [verifyToken, isAdmin], async function (req, res) {
  try {
    const newPracticeQuestion = await addPracticeQuestion(req.body);
    res.send(newPracticeQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Change user completion progress for a question
router.post("/:_id/completed", [verifyToken], async function (req, res) {
  try {
    const newUserProgressQuestion = await setUserQuestionProgress(req);
    res.send(newUserProgressQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Modify practice question
router.put("/:_id", [verifyToken, isAdmin], async function (req, res) {
  try {
    const documentId = req.params._id;
    const updatedPracticeQuestion = await editPracticeQuestion(
      documentId,
      req.body
    );
    res.send(updatedPracticeQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Delete practice question
router.delete("/:_id", [verifyToken, isAdmin], async function (req, res) {
  try {
    const documentId = req.params._id;
    const deleteResponse = await deletePracticeQuestion(documentId);
    res.send(deleteResponse);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

export default router;
