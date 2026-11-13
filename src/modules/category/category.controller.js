import * as service from "./category.service.js";

export async function ambilSemua(req, res) {
  const semuaKategori = await service.ambilSemua();
  res.status(200).json(semuaKategori);
}

export async function tambahCategory(req, res) {
  const dataKategori = await service.tambahCategory(req.body);
  res.status(201).json(dataKategori);
}

export async function editCategory(req, res) {
  const { id } = req.params;
  const updateCategory = await service.editCategory(id, req.body);
  res.status(200).json(updateCategory);
}

export async function hapuscategory(req, res) {
  const { id } = req.params;
  const buangKategori = await service.hapuscategory(id);
  res.status(200).json(buangKategori);
}
