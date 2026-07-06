import express from "express";
import {
  createAffectation,
  getAllAffectations,
  getAffectationById,
  updateAffectation,
  deleteAffectation,
} from "../controllers/affectation.controller.js";
import { validateAffectation } from "../middlewares/validate.middleware.js";

const router = express.Router();

router.post("/", validateAffectation, createAffectation);
router.get("/", getAllAffectations);
router.get("/:id", getAffectationById);
router.put("/:id", validateAffectation, updateAffectation);
router.delete("/:id", deleteAffectation);

export default router;