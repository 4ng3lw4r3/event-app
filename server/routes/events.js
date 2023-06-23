import express from "express"
import {
    createEvent,
    getEvents,
    getUserEvents,
    likeEvent,
    updateEvent,
    deleteEvent,
} from "../controllers/events.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();


// CREATE

router.post("/", verifyToken, createEvent);

// READ

router.get("/", verifyToken, getEvents);
router.get("/:userId/events", verifyToken, getUserEvents)

// SEARCH 


// UPDATE

router.patch("/:id/like", verifyToken, likeEvent);
router.patch("/:id", verifyToken, updateEvent)

// DELETE

router.delete("/:id", verifyToken, deleteEvent)


export default router;
