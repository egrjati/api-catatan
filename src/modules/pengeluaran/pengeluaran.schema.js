import * as z from "zod";

const daftarKategori = [
  "Makanan",
  "Minuman",
  "Transport",
  "Camilan",
  "Lainnya",
];

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
  kategori: z.enum(daftarKategori, "Kategori tidak terdaftar"),
});
