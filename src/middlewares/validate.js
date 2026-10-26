// LAYER SATPAM
// buat error + tempel status 400 → lempar

export default function validate(schema) {
  return function (req, res, next) {
    const hasilValidation = schema.safeParse(req.body); // Cek data dari client (req.body) pakai aturan di schema, lalu simpan hasilnya.
    // Tangani data gagal
    if (!hasilValidation.success) {
      const pesanError = hasilValidation.error.issues[0].message;
      const err = new Error(pesanError);

      err.status = 400;
      throw err;
    }
    req.body = hasilValidation.data;
    next();
  };
}
