// LAYER PELAYAN
import * as service from "./pengeluaran.service.js";

export const ambilSemua = async (req, res) => {
  const semuaCatatan = await service.ambilSemua();
  res.status(200).json(semuaCatatan);
};

export const tambahData = async (req, res) => {
  const catatanBaru = await service.tambahData(req.body);
  res.status(201).json(catatanBaru);
};
