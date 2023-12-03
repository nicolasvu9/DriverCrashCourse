import { Router } from "express";
import{ getFlashcards } from "../controllers/flashcards/flashcards.js";

import { verifyToken } from "../middlewares/auth.js";
const router = Router();

router.get("/", [verifyToken], async function (req, res) {
    try {
        const flashcards = await getFlashcards(req);
        res.send(flashcards);
    } catch (err) {
        res.status(400).send({ msg: err.message });
    }
});

export default router;