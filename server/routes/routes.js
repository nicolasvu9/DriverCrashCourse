import { Router } from "express";
import practiceQuestionsRoutes from "./practiceQuestionsRoutes.js";
import mockExamsRoutes from "./mockExamsRoutes.js";
import suggestedQuestionsRoutes from "./suggestedQuestionsRoutes.js";

const router = Router();

router.use("/practicequestions", practiceQuestionsRoutes);
router.use("/mockexams", mockExamsRoutes);
router.use("/suggestquestions", suggestedQuestionsRoutes);

export default router;
