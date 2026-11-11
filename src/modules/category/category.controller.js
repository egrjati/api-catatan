import * as service from "./category.service.js";

export async function ambilSemua(req, res) {
  const semuaKategori = await service.ambilSemua();
  res.status(200).json(semuaKategori);
}
