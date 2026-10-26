// Alamat API
import { Router } from "express";
import * as controller from "./pengeluaran.controller.js";
import validate from "../../middlewares/validate.js";
import { schemaTambahPengeluaran } from "./pengeluaran.schema.js";

const router = Router();

router.get("/", controller.ambilSemua);
router.post("/", validate(schemaTambahPengeluaran), controller.tambahData);

export default router;
