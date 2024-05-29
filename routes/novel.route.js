import express from "express";
import { getNovels } from "../controllers/novel.controller.js";

const router = express.Router();

router.get("/", getNovels);

export default router;
