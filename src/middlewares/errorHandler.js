// Baca err.status (400) → di bawah 500 → kirim pesan asli
// Kalau 4, fungsi itu dianggap error middleware
const errorHandler = (err, req, res, next) => {
  console.error(err);

  const status = err.status ?? 500;
  const pesan = status < 500 ? err.message : "Terjadi kesalahan di server";

  res.status(status).json({ pesan });
};
export default errorHandler;
