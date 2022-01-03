import express from "express";
const router = express.Router();

import { signin, signup, signupShelter } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/signupShelter", signupShelter);

export default router;