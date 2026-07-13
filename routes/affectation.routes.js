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

router.post("/",authenticate, validateAffectation, createAffectation);
router.get("/",authenticate,validateMatch, getAllAffectations);
router.get("/:id",authenticate,validateMatch, getAffectationById);
router.put("/:id",authenticate, validateAffectation, updateAffectation);
router.delete("/:id",authenticate,validateMatch, deleteAffectation);

export default router;