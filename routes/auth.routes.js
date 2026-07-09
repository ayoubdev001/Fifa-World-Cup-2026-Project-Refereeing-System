import express from "express";
import { register, login, me } from "../controllers/auth.controller.js";
import authenticate from "../middlewares/authenticate.middleware.js";
import authorize from "../middlewares/authorize.middleware.js";

const router = express.Router();

router.post("/register", authenticate, authorize("admin"), register);
router.post("/login", login);
router.get("/me", authenticate, me);

export default router;