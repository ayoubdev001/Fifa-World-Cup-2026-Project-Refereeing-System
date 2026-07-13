import express from "express";
import {
  createArbitre,
  getAllArbitres,
  getArbitreById,
  updateArbitre,
  deleteArbitre,
} from "../controllers/arbitre.controller.js";
import { validateArbitre } from "../middlewares/validate.middleware.js";
import authenticate from "../middlewares/authenticate.middleware.js";


const router = express.Router();


router.post("/",authenticate,validateArbitre, createArbitre);
router.get("/",authenticate,validateMatch, getAllArbitres);
router.get("/:id",authenticate,validateMatch, getArbitreById);
router.put("/:id",authenticate, validateArbitre, updateArbitre);
router.delete("/:id",authenticate,validateMatch, deleteArbitre);

export default router;