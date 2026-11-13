import { Router } from "express";
import * as controller from "./category.controller.js";
import { createCategorySchema } from "./category.schema.js";
import validate from "../../middlewares/validate.js";

const router = Router();

// GET /api/categories → ambil semua kategori
router.get("/", controller.ambilSemua);
router.post("/", validate(createCategorySchema), controller.tambahCategory);
router.put("/:id", validate(createCategorySchema), controller.editCategory);
router.delete("/:id", controller.hapuscategory);

export default router;
