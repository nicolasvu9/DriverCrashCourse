import express, { json } from "express";
import routes from "./routes/routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

async function main() {
  const app = express();
  dotenv.config();

  const port = process.env.SERVER_PORT || 5000;

  await mongoose.connect(process.env.MONGODB_URI);

  app.use(json());

  app.use("/api", routes);

  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
}

await main();
