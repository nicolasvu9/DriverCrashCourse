import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.js";

const router = Router();

router.post("/signin", async function (req, res) {
  try {
    const userResponse = await signIn(req);
    res.send(userResponse);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.post("/signup", async function (req, res) {
  try {
    await signUp(req);
    res.send("Successfully signed up");
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

export default router;
