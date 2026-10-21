import express from "express";

const app = express();

// middleware bawaan Express agar server bisa memahami data JSON yang dikirimkan oleh klien
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ pesan: "API Active" });
});

export default app;
