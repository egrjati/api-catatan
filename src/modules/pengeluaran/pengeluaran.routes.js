// Alamat API
import { Router } from "express";
import * as controller from "./pengeluaran.controller.js";

const router = Router();

router.get("/", controller.ambilSemua);
router.post("/", controller.tambahData);

export default router;
