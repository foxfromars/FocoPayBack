import { Router } from "express";
import tokenController from "../controllers/token.controller.js";

const router = Router();

router.get("/", tokenController.get);

export default router;
