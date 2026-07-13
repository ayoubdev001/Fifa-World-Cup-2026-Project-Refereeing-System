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

router.post("/",authenticate, validateMatch, createMatch);
router.get("/",authenticate,validateMatch, getAllMatchs);
router.get("/:id",authenticate,validateMatch, getMatchById);
router.put("/:id",authenticate, validateMatch, updateMatch);
router.delete("/:id",authenticate,validateMatch, deleteMatch);
router.get("/:id/arbitres",authenticate,validateMatch, getMatchArbitres);

export default router;