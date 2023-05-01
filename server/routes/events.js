import express from "express"
import {
    getEvent,
    getOrganizationEvents,
    likeEvent,
} from "../controllers/events.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ

//prefix users
router.get("/", verifyToken, getEvent);

// UPDATE


