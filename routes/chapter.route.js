import express from "express";
import { getChapters } from "../controllers/chapter.controller.js";

const router = express.Router();

router.get("/", getChapters);

export default router;
