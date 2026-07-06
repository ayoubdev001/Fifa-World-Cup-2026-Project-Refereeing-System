import express from "express";
import {
  createMatch,
  getAllMatchs,
  getMatchById,
  updateMatch,
  deleteMatch,
  getMatchArbitres,
} from "../controllers/match.controller.js";
import { validateMatch } from "../middlewares/validate.middleware.js";

const router = express.Router();

router.post("/", validateMatch, createMatch);
router.get("/", getAllMatchs);
router.get("/:id", getMatchById);
router.put("/:id", validateMatch, updateMatch);
router.delete("/:id", deleteMatch);
router.get("/:id/arbitres", getMatchArbitres);

export default router;