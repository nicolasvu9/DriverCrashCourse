import { Router } from "express";
import{ addFlashcard, getFlashcards, deleteFlashcard } from "../controllers/flashcards/flashcards.js";

import { verifyToken, isAdmin } from "../middlewares/auth.js";
const router = Router();

router.get("/", [verifyToken], async function (req, res) {
    try {
        const flashcards = await getFlashcards(req);
        res.send(flashcards);
    } catch (err) {
        res.status(400).send({ msg: err.message });
    }
});

router.post("/", [verifyToken, isAdmin], async function (req, res) {
    try {
        const newFlashcard = await addFlashcard(req.body);
        res.send(newFlashcard);
      } catch (err) {
        res.status(400).send({ msg: err.message });
      }
});

router.delete("/:_id", [verifyToken, isAdmin], async function (req, res) {
    try {
        const documentId = req.params._id;
        const deleteResponse = await deleteFlashcard(documentId);
        res.send(deleteResponse);
      } catch (err) {
        res.status(400).send({ msg: err.message });
      }
});

export default router;