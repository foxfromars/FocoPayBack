import "dotenv/config.js";

import cors from "cors";
import express from "express";
import siengeRoutes from "./routes/sienge.routes.js";
import authRoutes from "./routes/auth.routes.js";
import tokenRoutes from "./routes/token.routes.js";
import mongoose from "mongoose";
import authenticateMiddleware from "./middlewares/authenticate.middleware.js";
const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const app = express();

app.use(
  cors({
    origin: true, // permite qualquer origem
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["*"],
  }),
);
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use(express.raw({ type: "application/octet-stream", limit: "50mb" }));

app.use("/sienge", authenticateMiddleware.validateToken, siengeRoutes);
app.use("/auth", authRoutes);
app.use("/token", tokenRoutes);

app.get("/", (req, res) => {
  res.send("ping");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
