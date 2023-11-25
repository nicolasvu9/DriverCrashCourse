import { Router } from "express";

import {
  getSuggestedQuestions,
  addSuggestedQuestion,
  editSuggestedQuestion,
  deleteSuggestedQuestion,
  approveSuggestedQuestion,
} from "../controllers/suggestedQuestions.js";

const router = Router();

router.get("/", async function (_req, res) {
  const suggestedQuestions = await getSuggestedQuestions();
  res.send(suggestedQuestions);
});

router.post("/", async function (req, res) {
  try {
    const response = await addSuggestedQuestion(req.body);
    res.send(response);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.post("/:_id/approve", async function (req, res) {
  try {
    const id = req.params._id;
    const response = await approveSuggestedQuestion(id, req.body);
    res.send(response);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.put("/:_id", async function (req, res) {
  try {
    const updatedSuggestedQuestion = await editSuggestedQuestion(id, req.body);
    res.send(updatedSuggestedQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.delete("/:_id", async function (req, res) {
  try {
    const documentId = req.params._id;
    const deleteResponse = await deleteSuggestedQuestion(documentId);
    res.send(deleteResponse);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

export default router;
