import express from "express"
import { register, login } from "../controllers/auth.js"

const router = express.Router();

// CREATE

router.post("auth/register", register);
//prefix auth
router.post("auth/login", login);

export default router;