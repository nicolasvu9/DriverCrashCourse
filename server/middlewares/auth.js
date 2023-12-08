import User from "../models/auth/user.js";
import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.status(400).send({ message: "No token" });
  }
  try {
    const decoded = jwt.verify(token, process.env.AUTH_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(400).send({ message: "Invalid token" });
  }
}

export async function isAdmin(req, res, next) {
  try {
    const user = await User.findById(req.userId);

    if (user && user.role === "admin") {
      next();
      return;
    } else {
      throw new Error("User is not an admin");
    }
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
}
