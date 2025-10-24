import dotenv from "dotenv";
import express from "express";

import type { Request, Response } from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the server!" + process.env.OPENAI_KEY);
});

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ name: "Hello from the API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
