# 🏝️ Pesona Jogja — pesonajogja.web.id

> **Panduan utama untuk menjelajahi keindahan Yogyakarta dalam satu genggaman.**

---

## 📖 Tentang Proyek

**Pesona Jogja** adalah sebuah website portofolio berbasis web yang dirancang untuk membantu pengunjung dalam merencanakan liburan/vakansi ke daerah Provinsi Yogyakarta. Website ini dilengkapi dengan **program mekanisme scraping dan crawling** yang secara otomatis menjelajahi, menemukan, dan mengekstraksi data terstruktur dari berbagai platform *Online Travel Agency* (OTA) seperti **Traveloka, Tiket.com, Agoda, Airbnb**, dan platform pendukung layanan travel lainnya di wilayah Yogyakarta.

Seluruh data yang berhasil dikumpulkan kemudian disajikan secara rapi dan terintegrasi, sehingga pengguna dapat dengan mudah menemukan destinasi wisata, tiket transportasi, hingga penginapan sesuai kebutuhan dan tanggal perjalanan mereka.

---

## ✨ Fitur Utama

- 🔍 **Pencarian Berbasis Lokasi** — Cari destinasi berdasarkan kabupaten, kecamatan, hingga desa di wilayah Yogyakarta.
- 📅 **Filter Tanggal Check-in & Check-out** — Tentukan tanggal perjalanan untuk mendapatkan hasil yang relevan.
- 🏨 **Rekomendasi Penginapan** — Pilihan hotel/pesanggrahan dari bintang 1 hingga 5.
- ✈️ **Transportasi Lengkap** — Tiket pesawat, kereta api, kapal, dan kendaraan lainnya.
- 🤖 **AI Assistant (Gemini API)** — Chatbot cerdas yang memahami kebutuhan pengguna secara mendalam dan memberikan solusi relevan.
- 🔗 **Direct Link ke Platform Asal** — Setiap hasil dilengkapi tombol yang mengarah langsung ke sumber asli (Traveloka, Tiket.com, dll.) untuk konfirmasi lebih lanjut.
- 👤 **Akun Opsional** — Pengunjung dapat menjelajah tanpa akun, atau membuat akun untuk menyimpan data dan aktivitas personal.
- 🌐 **Scraping & Crawling Otomatis** — Bot cerdas yang menjelajahi internet untuk mengumpulkan data OTA secara terstruktur.

---

## 🛠️ Teknologi yang Digunakan

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | Next.js |
| **Bahasa** | TypeScript (`.tsx`), Node.js |
| **UI Library** | React, Tailwind CSS |
| **AI Assistant** | Gemini API |
| **Database** | Supabase (maks. 2GB) |
| **Deployment** | Vercel (via GitHub Repository) |
| **Domain** | [pesonajogja.web.id](https://pesonajogja.web.id) |

---

## 🎨 Ketentuan Tema & Desain

Seluruh antarmuka website **wajib** mengikuti ketentuan tema berikut:

1. **Gaya Visual** — Menggunakan *glassmorphism* (kabur/blur) pada background dengan tema **modern, minimalis, cerah/light theme**, namun tidak sepenuhnya putih. Menggunakan **gradient warna background blur**.
2. **Suasana** — Tenang, elegan, minimalis, namun tetap serius dan jelas.
3. **Nada Tulisan** — Berani, profesional, inovatif, menarik, dan premium.
4. **Font** — Menggunakan **Plus Jakarta Sans** untuk seluruh elemen teks.

---

## 🔄 Alur Penggunaan Website

1. **Akses Tanpa Akun** — Pengunjung dapat langsung menjelajah website tanpa perlu membuat akun.
2. **Pembuatan Akun (Opsional)** — Dengan membuat akun, pengguna mendapatkan identitas, hak akses khusus, serta penyimpanan data dan aktivitas personal.
3. **Pencarian Destinasi** — Pengguna memilih lokasi acuan (kabupaten/kecamatan/desa), lalu menentukan tanggal **check-in** dan **check-out**. Sistem akan menampilkan destinasi tujuan yang tersedia.
4. **Pilihan Transportasi** — Website menampilkan pilihan sarana transportasi: tiket pesawat, kereta, kapal, dan kendaraan lain.
5. **Pilihan Penginapan** — Menampilkan pilihan tempat penginapan/pesanggrahan dengan filter bintang 1–5 sesuai lokasi destinasi yang dipilih.
6. **Pengembangan Selanjutnya** — Output tambahan akan disesuaikan dengan pengembangan yang disarankan.
7. **Direct Link ke Sumber** — Setiap output dilengkapi tombol khusus yang menghubungkan pengguna langsung ke platform asal hasil scraping (misalnya Traveloka) untuk konfirmasi lebih lanjut.

---

## 🚀 Instalasi & Menjalankan Proyek

### Prasyarat

- Node.js versi 18 atau lebih baru
- npm / yarn / pnpm
- Akun Supabase (untuk database)
- API Key Gemini (untuk AI Assistant)

### Langkah-langkah

```bash
# 1. Clone repositori
git clone https://github.com/username/pesonajogja.git
cd pesonajogja

# 2. Install dependencies
npm install
# atau
yarn install
# atau
pnpm install

# 3. Buat file .env.local dan isi variabel lingkungan
cp .env.example .env.local
```

### Konfigurasi Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Scraping Configuration
SCRAPING_TARGET_URLS=https://www.traveloka.com,https://www.tiket.com,https://www.agoda.com,https://www.airbnb.com
```

### Menjalankan Server Development

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

### Build untuk Produksi

```bash
npm run build
npm run start
```

---

## 📁 Struktur Proyek (Rekomendasi)

```
pesonajogja/
├── public/                  # Aset statis (gambar, ikon, dll.)
├── src/
│   ├── app/                 # App Router Next.js
│   │   ├── layout.tsx       # Layout utama
│   │   ├── page.tsx         # Halaman beranda
│   │   ├── dashboard/       # Halaman dashboard pengguna
│   │   ├── search/          # Halaman pencarian
│   │   └── api/             # API Routes
│   │       ├── scraping/    # Endpoint scraping
│   │       └── ai/          # Endpoint AI Assistant
│   ├── components/          # Komponen React reusable
│   │   ├── ui/              # Komponen UI dasar
│   │   ├── GlassCard.tsx    # Kartu bergaya glassmorphism
│   │   └── ...
│   ├── lib/                 # Utilitas & konfigurasi
│   │   ├── supabase.ts      # Klien Supabase
│   │   ├── gemini.ts        # Klien Gemini API
│   │   └── scraper.ts       # Logika scraping & crawling
│   ├── hooks/               # Custom React hooks
│   ├── types/               # Definisi tipe TypeScript
│   └── styles/              # File CSS global
├── .env.example             # Contoh environment variables
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 🌐 Deployment

Website ini dideploy menggunakan **Vercel** dan terhubung langsung dengan repository GitHub.

### Langkah Deploy:

1. Push kode terbaru ke repository GitHub.
2. Buka [Vercel Dashboard](https://vercel.com/dashboard) dan import repository.
3. Tambahkan environment variables yang diperlukan di pengaturan proyek Vercel.
4. Klik **Deploy**.
5. Hubungkan domain kustom `pesonajogja.web.id` melalui menu **Domains** di Vercel.

---

## 🗄️ Database (Supabase)

Supabase digunakan sebagai backend database dengan kapasitas maksimal **2GB** untuk menyimpan:

- Data akun pengguna website
- Data hasil scraping dan crawling
- Data pencarian dan riwayat aktivitas pengguna
- Data lainnya yang dibutuhkan untuk operasional website

### Tabel Utama (Rekomendasi):

| Nama Tabel | Deskripsi |
|------------|-----------|
| `users` | Data akun dan profil pengguna |
| `destinations` | Data destinasi wisata hasil scraping |
| `accommodations` | Data penginapan/hotel |
| `transportations` | Data tiket transportasi |
| `search_history` | Riwayat pencarian pengguna |
| `scraping_logs` | Log aktivitas scraping & crawling |

---

## 🤖 AI Assistant

AI Assistant pada website ini menggunakan **Gemini API** untuk:

- Memahami kebutuhan pengguna secara mendalam.
- Memberikan rekomendasi destinasi, penginapan, dan transportasi yang relevan.
- Menjawab pertanyaan seputar liburan di Yogyakarta.
- Membantu navigasi dan pencarian di dalam website.

---

## ⚠️ Aturan & Ketentuan

1. **Penggunaan Data** — Seluruh data hasil scraping dan crawling hanya digunakan untuk keperluan portofolio dan pembelajaran. Tidak untuk diperjualbelikan.
2. **Hak Cipta** — Seluruh konten, desain, dan kode dalam proyek ini adalah milik pengembang kecuali disebutkan lain.
3. **Lisensi** — Proyek ini dilisensikan di bawah [MIT License](LICENSE).
4. **Kontribusi** — Kontribusi terbuka untuk siapa saja. Silakan buat *pull request* atau *issue* untuk diskusi.
5. **Privasi** — Data pengguna disimpan dengan aman di Supabase dan tidak dibagikan kepada pihak ketiga tanpa izin.

---

## 🤝 Kontribusi

Kontribusi sangat dihargai! Ikuti langkah berikut:

1. Fork repository ini.
2. Buat branch fitur baru (`git checkout -b fitur/NamaFitur`).
3. Commit perubahan (`git commit -m 'Menambahkan fitur X'`).
4. Push ke branch (`git push origin fitur/NamaFitur`).
5. Buat **Pull Request**.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License** — lihat file [LICENSE](LICENSE) untuk detailnya.

---

## 📬 Kontak

- **Website**: [pesonajogja.web.id](https://pesonajogja.web.id)
- **GitHub**: [github.com/username/pesonajogja](https://github.com/username/pesonajogja)
- **Email**: [email@pesonajogja.web.id](mailto:email@pesonajogja.web.id)

---

> **Pesona Jogja** — *"Pilihan utama untuk jelajahi dunia, dimulai dari Yogyakarta."* 🏝️✨

---

*Dibuat dengan ❤️ untuk portofolio GitHub dan kemajuan pariwisata Yogyakarta.*