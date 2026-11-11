import prisma from "../src/lib/prisma.js";
const kategoriAwal = [
  { nama: "Makanan", warna: "#F4845F" },
  { nama: "Minuman", warna: "#7B9CFF" },
  { nama: "Transport", warna: "#4ECDC4" },
  { nama: "Camilan", warna: "#FFE14D" },
  { nama: "Barang", warna: "#C3B1F5" },
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
