import express from "express";
import {
  createAffectation,
  getAllAffectations,
  getAffectationById,
  updateAffectation,
  deleteAffectation,
} from "../controllers/affectation.controller.js";

const router = express.Router();

router.post("/", createAffectation);
router.get("/", getAllAffectations);
router.get("/:id", getAffectationById);
router.put("/:id", updateAffectation);
router.delete("/:id", deleteAffectation);

export default router;