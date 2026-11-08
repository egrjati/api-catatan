// LAYER KOKI
import prisma from "../../lib/prisma.js";

function rapikanTanggal(catatan) {
  return {
    ...catatan,
    tanggal: catatan.tanggal.toISOString().slice(0, 10),
  };
}

// export => "agar bisa di import controller"
// ambilsemua catatan dari DB
export async function ambilSemua() {
  // .pengeluaran berasal dari model Pengeluaran di schema.prisma | .findMany() === SELECT * FROM pengeluaran
  const semuaCatatan = await prisma.pengeluaran.findMany({
    orderBy: [{ tanggal: "desc" }, { createdAt: "desc" }],
  });
  // maping, menjalankan rapikanTanggal untuk setiap catatan
  return semuaCatatan.map((catatan) => {
    return rapikanTanggal(catatan);
  });
}

// Tambah Data
export async function tambahData(data) {
  const catatanBaru = await prisma.pengeluaran.create({
    data: {
      nama: data.nama,
      harga: data.harga,
      tanggal: new Date(data.tanggal),
      kategori: data.kategori,
    },
  });
  return rapikanTanggal(catatanBaru);
}

// Hapud Data
export async function hapusData(id) {
  const catatanDihapus = await prisma.pengeluaran.delete({ where: { id } });
  return rapikanTanggal(catatanDihapus);
}

// Edit Data
export async function editData(id, data) {
  const catatanDiEdit = await prisma.pengeluaran.update({
    where: { id },
    data: {
      nama: data.nama,
      harga: data.harga,
      tanggal: new Date(data.tanggal),
      kategori: data.kategori,
    },
  });
  return rapikanTanggal(catatanDiEdit);
}
