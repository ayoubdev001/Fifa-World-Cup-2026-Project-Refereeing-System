import express from "express";
import {
  createMatch,
  getAllMatchs,
  getMatchById,
  updateMatch,
  deleteMatch,
  getMatchArbitres,
} from "../controllers/match.controller.js";

const router = express.Router();

router.post("/", createMatch);
router.get("/", getAllMatchs);
router.get("/:id", getMatchById);
router.put("/:id", updateMatch);
router.delete("/:id", deleteMatch);
router.get("/:id/arbitres", getMatchArbitres);

export default router;