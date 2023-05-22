import { Router } from "express";
import { login } from "../controllers/admin";

let router = Router()
router.post('/login',login);

export default router