import * as z from "zod";

export const createCategorySchema = z.object({
  namaCategory: z
    .string({
      error: (problem) =>
        problem.input === undefined ? "Nama wajib diisi" : "Nama harus text",
    })
    .trim()
    .min(1, "Nama wajib diisi")
    .max(50, "nama terlalu panjang"),

  warna: z
    .string({
      error: (problem) =>
        problem.input === undefined
          ? "Warna tidak boleh kosong"
          : "Warna harus hex",
    })
    .trim()
    .regex(/^#[0-9A-Fa-f]{6}$/, "Kode Hex tidak valid"),
});
