import express from "express";
import { getMessage, sendMessage } from "../controllers/messageController.js";


const router = express.Router();

router.route("/send/:id").post(sendMessage);
router.route("/:id").get( getMessage);

export default router;
