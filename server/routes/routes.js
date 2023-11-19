import { Router } from "express";
import practiceQuestionsRoutes from "./practiceQuestions.js";
import mockExamsRoutes from "./mockExams.js";
import suggestedQuestionsRoutes from "./suggestedQuestions.js";

const router = Router();

router.use("/practicequestions", practiceQuestionsRoutes);
router.use("/mockexams", mockExamsRoutes);
router.use("/suggestquestions", suggestedQuestionsRoutes);

export default router;
