import express from "express";
import {
  createArbitre,
  getAllArbitres,
  getArbitreById,
  updateArbitre,
  deleteArbitre,
} from "../controllers/arbitre.controller.js";
import { validateArbitre } from "../middlewares/validate.middleware.js";


const router = express.Router();


router.post("/",validateArbitre, createArbitre);
router.get("/", getAllArbitres);
router.get("/:id", getArbitreById);
router.put("/:id", validateArbitre, updateArbitre);
router.delete("/:id", deleteArbitre);

export default router;