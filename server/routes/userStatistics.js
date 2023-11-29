import { Router } from "express";
import { getStatistics } from "../controllers/userStatistics.js";
import { verifyToken } from "../middlewares/auth.js";

const router = Router();

router.get("/", [verifyToken], async function (req, res) {
  try {
    const user_id = req.userId;
    const userResponse = await getStatistics(user_id);
    res.send(userResponse);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

export default router;
