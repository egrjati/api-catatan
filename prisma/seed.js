import prisma from "../src/lib/prisma.js";
const kategoriAwal = [
  { namaCategory: "Makanan", warna: "#F4845F" },
  { namaCategory: "Minuman", warna: "#7B9CFF" },
  { namaCategory: "Transport", warna: "#4ECDC4" },
  { namaCategory: "Camilan", warna: "#FFE14D" },
  { namaCategory: "Barang", warna: "#C3B1F5" },
];

async function main() {
  try {
    const { count } = await prisma.kategori.createMany({
      data: kategoriAwal,
      skipDuplicates: true,
    });
    console.log(`${count} Kategori Ditambahkan`);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}
main();
