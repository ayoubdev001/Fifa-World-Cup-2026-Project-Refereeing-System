import express from "express";
import {
  createArbitre,
  getAllArbitres,
  getArbitreById,
  updateArbitre,
  deleteArbitre,
} from "../controllers/arbitre.controller.js"; // Make sure .js is right here

const router = express.Router();

// Now you can cleanly map them to your routes:
router.post("/", createArbitre);
router.get("/", getAllArbitres);
router.get("/:id", getArbitreById);
router.put("/:id", updateArbitre);
router.delete("/:id", deleteArbitre);

export default router;