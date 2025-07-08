import express from "express";
import { deleteTask, getTasks, newTask } from "../controllers/task.controller.js";

const router = express.Router();
router.post("/getTasks",getTasks)
router.post("/newTask",newTask);
router.get("/deleteTask",deleteTask);
router.get("/test", (req, res) => {
    res.status(200).json({ message: "test route is working" });
});

export default router;