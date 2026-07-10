import express from "express";
import { register, login, me } from "../controllers/auth.controller.js";
import authenticate from "../middlewares/authenticate.middleware.js";
import authorize from "../middlewares/authorize.middleware.js";
import { validateRegister, validateLogin } from "../middlewares/validateAuth.middleware.js";


const router = express.Router();

router.post("/register", authenticate, authorize("admin"),  validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/me", authenticate, me);

export default router;