import * as z from "zod";

export const schemaTambahPengeluaran = z.object({
  nama: z
    .string({
      error: (iss) =>
        iss.input === undefined ? "Nama wajib diisi" : "Nama harus text",
    })
    .trim()
    .min(1, "Nama wajib diisi")
    .max(50, "Nama maksimal 50 karakter"),
  harga: z
    .int({
      error: (iss) =>
        iss.input === undefined
          ? "Harga wajib diisi"
          : "Harga harus bilangan bulat",
    })
    .positive("Harga harus lebih dari 0")
    .max(2147483647, "Harga terlalu besar"),
  tanggal: z.iso.date("Tanggal tidak valid"),
  kategoriId: z.uuid({
    error: (iss) =>
      iss.input === undefined
        ? "Kategory wajib dipilih"
        : "Kategori tidak valid",
  }),
});
