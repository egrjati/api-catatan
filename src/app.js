import express from "express";
import pengeluaranRoutes from "./modules/pengeluaran/pengeluaran.routes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// middleware bawaan Express agar server bisa memahami data JSON yang dikirimkan oleh klien
app.use(express.json());

// Route healt check
app.get("/", (req, res) => {
  res.json({ pesan: "API Jalan Nihh Bozz" });
});

// Pasang routes pengeluaran di awalan /api/pengeluaran (semua method diteruskan ke router)
app.use("/api/pengeluaran", pengeluaranRoutes);
app.use(errorHandler);

export default app;
