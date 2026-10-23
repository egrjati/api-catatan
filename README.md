<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,50:0d1117,100:161b22&height=220&section=header&text=api-catatan&fontColor=E6EDF3&fontSize=52&fontAlignY=38&desc=✦%20%20backend%20untuk%20aplikasi%20catatan%20pengeluaran%20%20✦&descSize=16&descAlignY=58&descColor=8B949E&animation=fadeIn" width="100%" alt="api-catatan banner" />

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=300&size=18&duration=3500&pause=2500&color=8B949E&center=true&vCenter=true&width=640&height=40&lines=%F0%9F%AA%90+Catat+setiap+pengeluaran%2C+sekecil+apa+pun.;%F0%9F%9A%80+REST+API+dengan+Express+%2B+Prisma+%2B+MySQL.;%E2%9C%A6+Proyek+SaaS+pertama+%E2%80%94+masih+dalam+orbit+pengembangan.&italic=true" alt="Typing SVG" />
</a>

<br/>

<img src="https://img.shields.io/badge/Node.js-000000?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/Express_5-000000?style=flat-square&logo=express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/Prisma_7-000000?style=flat-square&logo=prisma&logoColor=white" alt="Prisma" />
<img src="https://img.shields.io/badge/MySQL-000000?style=flat-square&logo=mysql&logoColor=white" alt="MySQL" />
<img src="https://img.shields.io/badge/Bruno-000000?style=flat-square&logo=bruno&logoColor=white" alt="Bruno" />
<img src="https://img.shields.io/badge/status-in_orbit-000000?style=flat-square&logo=rocket&logoColor=white" alt="Status" />

</div>

<br/>

## 🪐 Tentang

**api-catatan** adalah backend (REST API) untuk aplikasi SaaS **catatan pengeluaran** — tempat mencatat ke mana uang pergi setiap hari: apa yang dibeli, berapa harganya, kapan, dan masuk kategori apa.

Repo ini **khusus untuk API**. Tampilan (frontend) akan dibangun terpisah dan berkomunikasi dengan API ini lewat JSON.

<br/>

## 🛰️ Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=nodejs,express,prisma,mysql,git&theme=dark" alt="Tech stack" />

</div>

| Lapisan        | Teknologi                                        |
| -------------- | ------------------------------------------------ |
| Runtime        | Node.js (ES Modules)                             |
| Framework      | Express 5                                        |
| ORM            | Prisma 7 + `@prisma/adapter-mariadb`             |
| Database       | MySQL                                            |
| Dev server     | `tsx watch` (auto-reload)                        |
| Uji API        | [Bruno](https://www.usebruno.com/) (folder `bruno/`) |

<br/>

## 🌌 Struktur Proyek

```
api-catatan/
├── prisma/
│   ├── migrations/          # riwayat migrasi database
│   └── schema.prisma        # definisi model data
├── src/
│   ├── generated/prisma/    # Prisma Client hasil generate (tidak di-commit)
│   ├── lib/
│   │   └── prisma.js        # Prisma Client yang dipakai bersama
│   ├── app.js               # konfigurasi Express & route
│   └── server.js            # titik masuk, menjalankan server
├── bruno/                   # koleksi request untuk uji API
├── prisma7.config.ts        # konfigurasi Prisma
└── .env.example             # contoh variabel lingkungan
```

<br/>

## 🚀 Memulai

### Prasyarat

- Node.js 20+
- MySQL yang sudah berjalan

### 1 · Clone & install

```bash
git clone https://github.com/egrjati/api-catatan.git
cd api-catatan
npm install
```

### 2 · Atur environment

Salin `.env.example` menjadi `.env`, lalu isi dengan kredensial database kamu:

```env
DATABASE_URL="mysql://USER:PASSWORD@127.0.0.1:3307/api_catatan"
```

### 3 · Siapkan database

File konfigurasi Prisma bernama `prisma7.config.ts`, jadi sertakan `--config`:

```bash
npx prisma migrate dev --config prisma7.config.ts
npx prisma generate --config prisma7.config.ts
```

### 4 · Jalankan server

```bash
npm run dev
```

Server meluncur di **http://localhost:3000** ✦

<br/>

## 🗂️ Model Data

**`Pengeluaran`**

| Field       | Tipe       | Keterangan                       |
| ----------- | ---------- | -------------------------------- |
| `id`        | `String`   | UUID, dibuat otomatis            |
| `nama`      | `String`   | Nama barang / pengeluaran        |
| `harga`     | `Int`      | Nominal dalam Rupiah             |
| `tanggal`   | `Date`     | Tanggal pengeluaran              |
| `kategori`  | `String`   | Contoh: makanan, transport       |
| `createdAt` | `DateTime` | Waktu data dibuat, otomatis      |

<br/>

## 📡 Endpoint

| Method | Endpoint | Deskripsi            | Status |
| :----: | -------- | -------------------- | :----: |
| `GET`  | `/`      | Cek status API       |   ✅   |

<details>
<summary><b>Contoh respons</b></summary>

```json
{
  "pesan": "API Active"
}
```

</details>

<br/>

## 🔭 Roadmap

- [x] Setup Express & Prisma dengan MySQL
- [x] Tabel `Pengeluaran` + migrasi
- [x] Prisma Client bersama (`src/lib/prisma.js`)
- [ ] CRUD pengeluaran (`GET` · `POST` · `PUT` · `DELETE`)
- [ ] Validasi input
- [ ] Filter berdasarkan tanggal & kategori
- [ ] Ringkasan total pengeluaran
- [ ] Autentikasi pengguna (multi-user SaaS)
- [ ] Deploy

<br/>

## 👨‍🚀 Pembuat

<div align="center">

Dibuat oleh **[egrjati](https://github.com/egrjati)**

<a href="https://enggar.pics"><img src="https://img.shields.io/badge/enggar.pics-000000?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" /></a>
<a href="https://instagram.com/egrjati"><img src="https://img.shields.io/badge/Instagram-000000?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" /></a>

<br/><br/>

<sub>✦ &nbsp;˚ &nbsp;· &nbsp;Setiap rupiah punya orbitnya sendiri. &nbsp;· &nbsp;˚ &nbsp;✦</sub>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:161b22,50:0d1117,100:000000&height=120&section=footer" width="100%" alt="footer" />

</div>
