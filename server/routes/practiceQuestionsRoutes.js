import { Router } from "express";
import practiceQuestion from "../models/practiceQuestion.js";
import {
  getPracticeQuestions,
  addPracticeQuestion,
} from "../controllers/practiceQuestions.js";

const router = Router();

router.get("/", async function (_req, res) {
  const practiceQuestions = await getPracticeQuestions();
  res.send(practiceQuestions);
});

router.post("/", async function (req, res) {
  const newPracticeQuestion = await addPracticeQuestion(req.body);
  res.send(newPracticeQuestion);
});

router.put("/:id", async function (req, res) {});

export default router;
