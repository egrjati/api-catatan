<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,50:0d1117,100:161b22&height=220&section=header&text=api-catatan&fontColor=E6EDF3&fontSize=52&fontAlignY=38&desc=✦%20%20backend%20untuk%20aplikasi%20catatan%20pengeluaran%20%20✦&descSize=16&descAlignY=58&descColor=8B949E&animation=fadeIn" width="100%" alt="api-catatan banner" />

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=300&size=18&duration=3500&pause=2500&color=8B949E&center=true&vCenter=true&width=640&height=40&lines=%F0%9F%AA%90+Catat+setiap+pengeluaran%2C+sekecil+apa+pun.;%F0%9F%9A%80+REST+API+dengan+Express+%2B+Prisma+%2B+MySQL.;%E2%9C%A6+Proyek+SaaS+pertama+%E2%80%94+masih+dalam+orbit+pengembangan.&italic=true" alt="Typing SVG" />
</a>

<br/>

<img src="https://img.shields.io/badge/status-in_orbit-161b22?style=flat-square&labelColor=000000&logo=rocket&logoColor=white" alt="Status" />
<img src="https://img.shields.io/badge/version-1.0.0-161b22?style=flat-square&labelColor=000000" alt="Version" />
<img src="https://img.shields.io/badge/node-20%2B-161b22?style=flat-square&labelColor=000000&logo=nodedotjs&logoColor=white" alt="Node 20+" />

</div>

<br/>

## Tentang

**api-catatan** adalah backend (REST API) untuk aplikasi SaaS **catatan pengeluaran** — tempat mencatat ke mana uang pergi setiap hari: apa yang dibeli, berapa harganya, kapan, dan masuk kategori apa.

Repo ini **khusus untuk API**. Tampilan (frontend) akan dibangun terpisah dan berkomunikasi dengan API ini lewat JSON.

<br/>

## Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=nodejs,express,prisma,mysql,git&theme=dark" alt="Tech stack" />

<br/><br/>

<img src="https://img.shields.io/badge/Runtime-Node.js-161b22?style=flat-square&labelColor=000000&logo=nodedotjs&logoColor=white" alt="Runtime: Node.js" />
<img src="https://img.shields.io/badge/Framework-Express_5-161b22?style=flat-square&labelColor=000000&logo=express&logoColor=white" alt="Framework: Express 5" />
<img src="https://img.shields.io/badge/ORM-Prisma_7-161b22?style=flat-square&labelColor=000000&logo=prisma&logoColor=white" alt="ORM: Prisma 7" />
<br/>
<img src="https://img.shields.io/badge/Database-MySQL-161b22?style=flat-square&labelColor=000000&logo=mysql&logoColor=white" alt="Database: MySQL" />
<img src="https://img.shields.io/badge/Dev_Server-tsx_watch-161b22?style=flat-square&labelColor=000000&logo=typescript&logoColor=white" alt="Dev server: tsx watch" />
<img src="https://img.shields.io/badge/Uji_API-Bruno-161b22?style=flat-square&labelColor=000000&logo=bruno&logoColor=white" alt="Uji API: Bruno" />

</div>

<br/>

## Struktur Proyek

```
api-catatan/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── generated/prisma/
│   ├── lib/
│   │   └── prisma.js
│   ├── app.js
│   └── server.js
├── bruno/
├── prisma7.config.ts
└── .env.example
```

<br/>

## Memulai

### Prasyarat

- Node.js 20+
- MySQL sudah berjalan

### 1 · Clone & install

```bash
git clone https://github.com/egrjati/api-catatan.git
cd api-catatan
npm install
```

### 4 · Jalankan server

```bash
npm run dev
```

Server meluncur di **http://localhost:3000** ✦

<br/>

## 🗂️ Model Data

**`Pengeluaran`**

| Field       | Tipe       | Keterangan                  |
| ----------- | ---------- | --------------------------- |
| `id`        | `String`   | UUID, dibuat otomatis       |
| `nama`      | `String`   | Nama barang / pengeluaran   |
| `harga`     | `Int`      | Nominal dalam Rupiah        |
| `tanggal`   | `Date`     | Tanggal pengeluaran         |
| `kategori`  | `String`   | Contoh: makanan, transport  |
| `createdAt` | `DateTime` | Waktu data dibuat, otomatis |

<br/>

## 📡 Endpoint

| Method | Endpoint | Deskripsi      | Status |
| :----: | -------- | -------------- | :----: |
| `GET`  | `/`      | Cek status API |   ✅   |

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

<div align="center">

Dibuat oleh **[egrjati](https://github.com/egrjati)**

<a href="https://enggar.pics"><img src="https://img.shields.io/badge/enggar.pics-000000?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" /></a>
<a href="https://instagram.com/egrjati"><img src="https://img.shields.io/badge/Instagram-000000?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" /></a>

</div>
