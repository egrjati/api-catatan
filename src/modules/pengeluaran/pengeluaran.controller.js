// LAYER PELAYAN
import * as service from "./pengeluaran.service.js";

export async function ambilSemua(req, res) {
  const semuaCatatan = await service.ambilSemua();
  res.status(200).json(semuaCatatan);
}

export async function tambahData(req, res) {
  const catatanBaru = await service.tambahData(req.body);
  res.status(201).json(catatanBaru);
}

export async function hapusData(req, res) {
  const { id } = req.params;
  const catatanDihapus = await service.hapusData(id);
  res.status(200).json(catatanDihapus);
}

export async function editData(req, res) {
  const { id } = req.params;
  const catatanDiEdit = await service.editData(id, req.body);
  res.status(200).json(catatanDiEdit);
}
