import User from "../models/auth/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signUp(req) {
  try {
    const newUser = new User({
      username: req.body.username,
      hash_password: bcrypt.hashSync(req.body.password, 10),
      role: "user",
    });
    await newUser.save();
  } catch (err) {
    console.error("Error Signing up new user", err);
    throw err;
  }
}

export async function signIn(req) {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      throw new Error("User not found");
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.hash_password
    );

    if (!passwordIsValid) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ id: user.id }, process.env.AUTH_SECRET);
    return {
      _id: user.id,
      username: user.username,
      access_token: token,
      role: user.role,
    };
  } catch (err) {
    console.error("Error signing in", err);
    throw err;
  }
}
