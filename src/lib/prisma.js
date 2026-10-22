import "dotenv/config"; //fungsi : Baca .env
import { PrismaMariaDb } from "@prisma/adapter-mariadb"; //mengambil adapter, yaitu penghubung antara Prisma Client dan database MySQL
import { PrismaClient } from "../generated/prisma/client.ts"; //mengambil PrismaClient dari hasil generate

// Adapter = "colokan" penghubung Prisma Client ke MySQL.
// Alamat database diambil dari .env (lewat process.env), bukan ditulis langsung,
// supaya password tidak ikut ter-commit ke GitHub.
const adapter = new PrismaMariaDb(process.env.DATABASE_URL);

// Prisma Client = "petugas gudang" yang mengurus data di database.
// Dibuat dari cetakan PrismaClient, lalu dibekali adapter di atas.
// { adapter } adalah singkatan dari { adapter: adapter }.
const prisma = new PrismaClient({ adapter });

export default prisma;
