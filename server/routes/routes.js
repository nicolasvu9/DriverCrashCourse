import { Router } from "express";
import practiceQuestionsRoutes from "./practiceQuestions.js";
import mockExamsRoutes from "./mockExams.js";
import authRoutes from "./auth.js";
import userStatisticsRoutes from "./userStatistics.js";

import suggestedQuestionsRoutes from "./suggestedQuestions.js";
import flashcards from "./flashcards.js"

const router = Router();

router.use("/practicequestions", practiceQuestionsRoutes);
router.use("/mockexams", mockExamsRoutes);
router.use("/auth", authRoutes);
router.use("/suggestedquestions", suggestedQuestionsRoutes);
router.use("/statistics", userStatisticsRoutes);
router.use("/flashcards", flashcards);
export default router;
