import express from "express"
import {
    createEvent,
    getEvents,
    getOrganizationEvents,
    likeEvent,
} from "../controllers/events.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/", verifyToken, createEvent);

// READ

//prefix users
router.get("/", verifyToken, getEvents);
router.get("/:userId/events", verifyToken, getOrganizationEvents)

// UPDATE

router.patch("/:id/like", verifyToken, likeEvent);

export default router;
