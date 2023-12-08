import { Router } from "express";

import {
  getSuggestedQuestions,
  addSuggestedQuestion,
  editSuggestedQuestion,
  deleteSuggestedQuestion,
  approveSuggestedQuestion,
} from "../controllers/practiceQuestions/suggestedQuestions.js";

import { verifyToken, isAdmin } from "../middlewares/auth.js";

const router = Router();

// Get all suggested questions by users
router.get("/", [verifyToken], async function (_req, res) {
  const suggestedQuestions = await getSuggestedQuestions();
  res.send(suggestedQuestions);
});

// Add new suggestion from user waiting to be approved
router.post("/", [verifyToken], async function (req, res) {
  try {
    const response = await addSuggestedQuestion(req.body);
    res.send(response);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Approve new suggestion from user by admin
router.post("/:_id/approve", [verifyToken, isAdmin], async function (req, res) {
  try {
    const id = req.params._id;
    const response = await approveSuggestedQuestion(id, req.body);
    res.send(response);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Modify suggestion question
router.put("/:_id", [verifyToken, isAdmin], async function (req, res) {
  try {
    const id = req.params._id;
    const updatedSuggestedQuestion = await editSuggestedQuestion(id, req.body);
    res.send(updatedSuggestedQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Remove suggestion question
router.delete("/:_id", [verifyToken, isAdmin], async function (req, res) {
  try {
    const documentId = req.params._id;
    const deleteResponse = await deleteSuggestedQuestion(documentId);
    res.send(deleteResponse);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

export default router;
