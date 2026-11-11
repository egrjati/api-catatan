import prisma from "../../lib/prisma.js";

export async function ambilSemua() {
  // array kategori
  const semuaKategori = await prisma.kategori.findMany({
    orderBy: { nama: "asc" },
  });
  return semuaKategori;
}
