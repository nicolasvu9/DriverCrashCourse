import express, { json } from "express";
import routes from "./routes/routes.js";
import mongoose from "mongoose";
import config from "config";

async function main() {
  const app = express();

  const port = config.get("server.port") || 5000;

  await mongoose.connect(config.get("mongodb.URI"));

  app.use(json());

  app.use(routes);

  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
}

await main();
