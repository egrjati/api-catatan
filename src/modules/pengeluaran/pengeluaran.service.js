// LAYER KOKI
import prisma from "../../lib/prisma.js";

const rapikanTanggal = (catatan) => {
  return {
    ...catatan,
    tanggal: catatan.tanggal.toISOString().slice(0, 10),
  };
};

// export => "agar bisa di import controller"
// ambilsemua catatan dari DB
export const ambilSemua = async () => {
  // .pengeluaran berasal dari model Pengeluaran di schema.prisma | .findMany() === SELECT * FROM pengeluaran
  const semuaCatatan = await prisma.pengeluaran.findMany({
    orderBy: { tanggal: "desc" },
  });
  // maping, menjalankan rapikanTanggal untuk setiap catatan
  return semuaCatatan.map((catatan) => {
    return rapikanTanggal(catatan);
  });
};

// Tambah Data
export const tambahData = async (data) => {
  const catatanBaru = await prisma.pengeluaran.create({
    data: {
      nama: data.nama,
      harga: data.harga,
      tanggal: new Date(data.tanggal),
      kategori: data.kategori,
    },
  });
  return rapikanTanggal(catatanBaru);
};
