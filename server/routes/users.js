import express from "express"
import {
    getUser,
    getUserEvents,
    addRemoveOrganization,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ

//prefix users
router.get("/:id", verifyToken, getUser);
router.get("/:id/events", verifyToken, getUserEvents);

// UPDATE

router.patch("/:id/:Id", verifyToken, addRemoveOrganization);

export default router;
