# 🌸 dflorar API

**dflorar** adalah REST API untuk aplikasi toko bunga modern. API ini menyediakan layanan manajemen katalog bunga, order, dan berbagai operasi bisnis toko bunga secara digital.

---

## 🚀 Tentang Project Ini

dflorar API adalah backend server yang dibangun untuk mendukung aplikasi toko bunga full-stack. API ini mengelola semua data dan logika bisnis mulai dari katalog bouquet (rangkaian bunga), order pelanggan, hingga transaksi. Dengan arsitektur yang clean dan modular, API ini mudah dikembangkan dan di-maintain.

---

## 📋 Persyaratan Sistem

Sebelum memulai, pastikan Anda sudah menginstal:

- **Node.js** (v16 atau lebih tinggi)
- **npm** atau **yarn**
- **Database** (MySQL, PostgreSQL, atau SQLite - sesuai konfigurasi di `.env`)

---

## 🔧 Setup & Instalasi

### 1. Clone Repository

```bash
git clone <repository-url>
cd florist-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi Environment

Buat file `.env` di root folder:

```env
DATABASE_URL="mysql://user:password@localhost:3306/dflorar"
PORT=3000
NODE_ENV=development
```

### 4. Setup Database dengan Prisma

```bash
# Generate Prisma Client
npx prisma generate

# Jalankan migration
npx prisma migrate dev --name init
```

---

## ▶️ Menjalankan Server

### Development Mode

```bash
npm start
```

Server akan berjalan di: **http://localhost:3000**

Untuk auto-reload saat development, gunakan:

```bash
npm install -D nodemon
npx nodemon index.js
```

---

## 📁 Struktur Project

```
florist-api/
├── index.js                 # Entry point aplikasi
├── package.json             # Dependencies & scripts
├── .env                      # Environment variables (jangan commit!)
│
├── controllers/             # Business logic
│   └── bouquetController.js # Handler untuk bouquet operations
│
├── routes/                  # API Routes
│   └── bouquetRoutes.js     # Routes untuk /api/bouquets
│
├── prisma/                  # Database configuration
│   ├── schema.prisma        # Database schema definition
│   └── migrations/          # Database migration history
│
└── README.md                # File ini
```

---

## 🔌 API Endpoints

### Bouquet Routes

Semua endpoint berada di `/api/bouquets`:

| Method | Endpoint | Deskripsi                  |
| ------ | -------- | -------------------------- |
| GET    | `/`      | Ambil semua bouquet        |
| GET    | `/:id`   | Ambil detail bouquet by ID |
| POST   | `/`      | Buat bouquet baru          |
| PUT    | `/:id`   | Update bouquet             |
| DELETE | `/:id`   | Hapus bouquet              |

**Contoh Request:**

```bash
curl http://localhost:3000/api/bouquets
```

---

## 🛠️ Development Tips

- **Prisma Studio**: Buka GUI untuk melihat/manage database:

  ```bash
  npx prisma studio
  ```

- **Generate Prisma Client** setelah mengubah schema:

  ```bash
  npx prisma generate
  ```

- **Jalankan Migration** setelah update schema:
  ```bash
  npx prisma migrate dev
  ```

---

## 📦 Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database ORM**: Prisma
- **CORS**: Enabled untuk cross-origin requests
- **Package Manager**: npm

---

## 📝 Notes

- Jangan commit file `.env` - gunakan `.env.example` untuk template
- Pastikan database sudah berjalan sebelum menjalankan server
- Semua credentials dan sensitive data harus di `.env`

---

## 📞 Support

Jika ada issues, check:

1. Pastikan Node.js version kompatibel
2. Database connection sudah benar di `.env`
3. Semua dependencies sudah terinstall dengan `npm install`
4. Port 3000 tidak terpakai oleh aplikasi lain

---

**Happy Coding! 🌻**
