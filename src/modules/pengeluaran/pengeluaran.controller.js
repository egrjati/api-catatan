// LAYER PELAYAN
import * as service from "./pengeluaran.service.js";

export const ambilSemua = async (req, res) => {
  try {
    const semuaCatatan = await service.ambilSemua();
    res.status(200).json(semuaCatatan);
  } catch (err) {
    console.error(err);
    res.status(500).json({ pesan: "Gagal mengambil data pengeluaran" });
  }
};

export const tambahData = async (req, res) => {
  try {
    const catatanBaru = await service.tambahData(req.body);
    res.status(201).json(catatanBaru);
  } catch (err) {
    console.error(err);
    res.status(500).json({ pesan: "Gagal menyimpan data" });
  }
};
