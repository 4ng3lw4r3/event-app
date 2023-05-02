import express from "express"
import { register, login } from "../controllers/auth.js"

const router = express.Router();

router.post("/", register);
//prefix auth
router.post("/login", login);

export default router;