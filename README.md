# 💰 FinTrack - Aplikasi Manajemen Keuangan Bisnis Indonesia

**FinTrack** adalah aplikasi web modern untuk mengelola keuangan bisnis Anda dengan antarmuka yang menarik dan fitur-fitur lengkap.

## ✨ Fitur Utama

### 📊 Dasbor Ringkasan
- Tampilan ringkasan total pendapatan, pengeluaran, saldo, dan jumlah transaksi
- Menampilkan 5 transaksi terakhir
- Kartu ringkasan dengan visual yang menarik
- Update real-time saat menambah transaksi

### 💳 Pencatatan Transaksi
- Form lengkap untuk mencatat transaksi pendapatan dan pengeluaran
- Pilih tipe transaksi (Pendapatan/Pengeluaran)
- Kategori dinamis berdasarkan tipe transaksi
- Validasi input sebelum menyimpan
- Notifikasi sukses setelah transaksi ditambahkan

### 📋 Riwayat Transaksi
- Tampilkan semua transaksi dalam bentuk tabel
- Filter berdasarkan tipe transaksi
- Filter berdasarkan kategori
- Fitur hapus transaksi
- Format tanggal dan mata uang yang sesuai lokal Indonesia

### 📈 Grafik Analisis
- **Bar Chart**: Perbandingan pendapatan vs pengeluaran per bulan
- **Line Chart**: Trend saldo bulanan
- **Pie Chart**: Komposisi pengeluaran per kategori
- **Pie Chart**: Komposisi pendapatan per kategori
- Semua grafik interaktif dengan tooltip

## 🎨 Teknologi yang Digunakan

- **React 18** - UI Framework
- **Vite** - Build tool modern
- **Tailwind CSS** - Styling framework
- **Recharts** - Library untuk chart dan grafik
- **Lucide React** - Icon library
- **LocalStorage** - Penyimpanan data lokal

## 📦 Instalasi

### Prasyarat
- Node.js v16 atau lebih tinggi
- npm atau yarn

### Langkah Instalasi

1. **Clone repository**
```bash
git clone https://github.com/alfridowatung026-creator/financial-management-app.git
cd financial-management-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Jalankan development server**
```bash
npm run dev
```

Aplikasi akan membuka secara otomatis di `http://localhost:3000`

## 🚀 Build untuk Production

```bash
npm run build
```

Hasil build akan berada di folder `dist/`

## 📁 Struktur Project

```
financial-management-app/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx          # Dasbor ringkasan
│   │   ├── TransactionForm.jsx    # Form pencatatan
│   │   ├── TransactionHistory.jsx # Riwayat transaksi
│   │   ├── AnalyticsChart.jsx     # Grafik analisis
│   │   └── Sidebar.jsx            # Navigasi samping
│   ├── utils/
│   │   └── storage.js             # Utility untuk localStorage
│   ├── App.jsx                    # Komponen utama
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html                     # HTML entry point
├── package.json                   # Dependencies
├── vite.config.js                 # Konfigurasi Vite
├── tailwind.config.js             # Konfigurasi Tailwind
└── postcss.config.js              # Konfigurasi PostCSS
```

## 💾 Penyimpanan Data

Aplikasi menggunakan **LocalStorage** browser untuk menyimpan data transaksi. Data akan tersimpan secara otomatis dan persisten selama Anda tidak menghapus cache browser.

## 🏃 Cara Penggunaan

### 1. Menambah Transaksi
1. Klik menu "Tambah Transaksi" di sidebar
2. Pilih tipe transaksi (Pendapatan/Pengeluaran)
3. Masukkan jumlah dalam Rupiah
4. Pilih kategori yang sesuai
5. Masukkan keterangan transaksi
6. Klik "Simpan Transaksi"

### 2. Melihat Dasbor
1. Klik menu "Dasbor" di sidebar
2. Lihat ringkasan keuangan Anda
3. Lihat 5 transaksi terakhir

### 3. Melihat Riwayat
1. Klik menu "Riwayat" di sidebar
2. Gunakan filter untuk mencari transaksi spesifik
3. Klik ikon trash untuk menghapus transaksi

### 4. Analisis Keuangan
1. Klik menu "Analisis" di sidebar
2. Lihat berbagai grafik untuk memahami pola keuangan
3. Hover pada grafik untuk melihat detail

## 🏆 Kategori Transaksi

### Pendapatan
- Penjualan
- Investasi
- Bunga Bank
- Lainnya

### Pengeluaran
- Gaji Karyawan
- Sewa
- Utilitas
- Marketing
- Bahan Baku
- Transportasi
- Lainnya

## 🔐 Keamanan & Privasi

- Semua data disimpan di LocalStorage browser Anda
- Tidak ada data yang dikirim ke server
- Aplikasi 100% berjalan di client-side
- Data tidak dikirim ke pihak ketiga

## 🐛 Troubleshooting

### Port 3000 sudah digunakan
Ubah port di `vite.config.js`:
```javascript
server: {
  port: 3001, // Ubah ke port lain
  open: true
}
```

### Data tidak tersimpan
Pastikan localStorage tidak dinonaktifkan di browser Anda

### Build gagal
Coba hapus `node_modules` dan install ulang:
```bash
rm -rf node_modules
npm install
```

## 📝 Lisensi

MIT License - Bebas digunakan untuk keperluan apapun

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat pull request atau buka issue untuk suggestions.

## 📧 Kontak

Jika ada pertanyaan atau masalah, silakan hubungi melalui GitHub Issues.

---

**Dibuat dengan ❤️ untuk mengelola keuangan bisnis Indonesia**
