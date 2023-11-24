import { Router } from "express";
import uploadImageMiddleware from "../middleware/fileUploadMiddleware.js";

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

router.post("/", uploadImageMiddleware, async function (req, res) {
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
    const response = await addPracticeQuestion(data);
    res.send(response);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.put("/:_id", uploadImageMiddleware, async function (req, res) {
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
    const updatedPracticeQuestion = await editPracticeQuestion(id, data);
    res.send(updatedPracticeQuestion);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.delete("/:_id", async function (req, res) {
  try {
    const documentId = req.params._id;
    const deleteResponse = await deletePracticeQuestion(documentId);
    res.send(deleteResponse);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

export default router;
