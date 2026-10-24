import "dotenv/config"; //fungsi : Baca .env
import { PrismaMariaDb } from "@prisma/adapter-mariadb"; //mengambil adapter, yaitu penghubung antara Prisma Client dan database MySQL
import { PrismaClient } from "../generated/prisma/client.ts"; //mengambil PrismaClient dari hasil generate

// allowPublicKeyRetrieval: izinkan adapter minta "gembok" (public key) dari MySQL 8 untuk login
const adapter = new PrismaMariaDb(
  process.env.DATABASE_URL + "?allowPublicKeyRetrieval=true",
);

// Prisma Client = "petugas gudang" yang mengurus data di database.
// Dibuat dari cetakan PrismaClient, lalu dibekali adapter di atas.
// { adapter } adalah singkatan dari { adapter: adapter }.
const prisma = new PrismaClient({ adapter });

export default prisma;
