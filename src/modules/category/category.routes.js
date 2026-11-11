import { Router } from "express";
import * as controller from "./category.controller.js";

const router = Router();

// GET /api/categories → ambil semua kategori
router.get("/", controller.ambilSemua);

export default router;
