import { Router } from "express";
import {
  getPracticeQuestions,
  addPracticeQuestion,
  editPracticeQuestion,
  deletePracticeQuestion,
} from "../controllers/practiceQuestions.js";

const router = Router();

router.get("/", async function (_req, res) {
  const practiceQuestions = await getPracticeQuestions();
  res.send(practiceQuestions);
});

router.post("/add", async function (req, res) {
  const newPracticeQuestion = await addPracticeQuestion(req.body);
  res.send(newPracticeQuestion);
});

router.put("/:_id", async function (req, res) {
  const documentId = req.params._id;
  const updatedPracticeQuestion = await editPracticeQuestion(
    documentId,
    req.body
  );
  res.send(updatedPracticeQuestion);
});

router.delete("/:_id", async function (req, res) {
  const documentId = req.params._id;
  const deleteResponse = await deletePracticeQuestion(documentId);
  res.send(deleteResponse);
});

export default router;
