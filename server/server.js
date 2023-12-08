import express, { json } from "express";
import routes from "./routes/routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

async function main() {
  const app = express();
  dotenv.config({ path: "./config.env" });

  const port = process.env.PORT || 5000;

  await mongoose.connect(process.env.MONGODB_URI);

  app.use(cors());
  app.use(json());
  app.use(express.static("public"));

  app.use("/api", routes);

  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
}

await main();
