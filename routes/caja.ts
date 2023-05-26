import { Router } from "express";
import { getMntCaja } from "../controllers/caja";

const router = Router();

router.post('/getMntCaja',getMntCaja);

export default router;