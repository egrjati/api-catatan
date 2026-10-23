import { prisma } from "../../lib/prisma.js";

// export => "agar bisa di import controller"
export const ambilSemua = async () => {
  // .pengeluaran berasal dari model Pengeluaran di schema.prisma | .findMany() === SELECT * FROM pengeluaran
  const semuaCatatan = await prisma.pengeluaran.findMany({
    orderBy: { tanggal: "desc" },
  });
  return semuaCatatan;
};

// Tambah Data
export const tambah = async (data) => {
  const catatanBaru = await prisma.pengeluaran.create({
    data: {
      nama: data.nama,
      harga: data.harga,
      tanggal: new Date(data.tanggal),
      kategori: data.kategori,
    },
  });
  return catatanBaru;
};
