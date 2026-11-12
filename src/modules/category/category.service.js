import prisma from "../../lib/prisma.js";

// Get kategori
export async function ambilSemua() {
  // array kategori
  const semuaKategori = await prisma.kategori.findMany({
    orderBy: { nama: "asc" },
  });
  return semuaKategori;
}

// Post Kategori
export async function tambahCategory(data) {
  const dataKategori = await prisma.kategori.create({
    data: {
      nama: data.nama,
      warna: data.warna,
    },
  });
  return dataKategori;
}
