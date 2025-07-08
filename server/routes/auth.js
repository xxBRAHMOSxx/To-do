import express from "express";
import { register,login, logout } from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/register", register)
router.post("/login",login);
router.get("/logout",logout);
router.get("/test", (req, res) => {
    res.status(200).json({ message: "test route is working" });
});

export default router;