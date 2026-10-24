import express from "express";
import pengeluaranRoutes from "./modules/pengeluaran/pengeluaran.routes.js";

const app = express();

// middleware bawaan Express agar server bisa memahami data JSON yang dikirimkan oleh klien
app.use(express.json());

// Route healt check
app.get("/", (req, res) => {
  res.json({ pesan: "API Jalan Nihh Bozz" });
});

// Semua method (GET, POST, dan lainnya)
app.use("/api/pengeluaran", pengeluaranRoutes);

export default app;
