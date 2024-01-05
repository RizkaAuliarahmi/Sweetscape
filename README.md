# Sweetscape: Online Cake Store

## Deskripsi Proyek

Sweetscape adalah proyek simulasi toko kue online yang dibuat untuk menunjukkan kemampuan pengembangan web menggunakan teknologi .NET dan React.js. Proyek ini dirancang sebagai platform fiktif yang menawarkan berbagai kue. Meskipun tidak memiliki tujuan bisnis nyata, Sweetscape mencakup berbagai fitur e-commerce yang umum ditemukan pada platform online, memberikan gambaran tentang kemampuan pengembang dalam merancang dan mengimplementasikan fungsionalitas web. 

Sweetscape dirancang dengan tampilan responsif untuk memberikan pengalaman pengguna yang optimal di berbagai perangkat. Batasan proyek ini ada pada proses checkout yang hanya mencakup pemilihan metode pembayaran. Fitur checkout lengkap tidak diimplementasikan.

## Fitur

1. **Katalog dan Pencarian**: Jelajahi dan cari produk dengan sistem pencarian.
2. **Filter dan Urutan**: Filter dan urutkan produk berdasarkan kriteria tertentu.
3. **Pagination pada Katalog:** Navigasi lebih mudah dengan fitur pagination pada daftar produk.
4. **Detail Produk**: Lihat informasi rinci sebelum pembelian dan memasukkan produk ke dalam keranjang sesuai kuantitas yang diinginkan.
5. **Keranjang Belanja**: Kelola item dalam keranjang belanja sebelum melakukan checkout.
6. **Manajemen Alamat**: Simpan dan kelola alamat pengiriman untuk pengalaman checkout yang lebih cepat.
7. **Autentikasi Pengguna**: Daftar dan masuk untuk pengalaman pengguna yang personal.
9. **Dark Mode**: Beralih antara tema terang dan gelap untuk kenyamanan visual.
10. **Lihat Produk Baru:** Temukan produk terbaru pada halaman beranda.

## Teknologi yang Digunakan
### Backend:
- .NET 7
- Entity Framework Core
- JSON Web Token (JWT) Authentication

### Frontend:
- React With Typescript
- React Redux
- React Router dom
- Material-UI
- Form Validation with Yup
- Axios (HTTP client)

### Database:
- SQLite

## Persiapan

Pastikan Anda sudah menginstal:

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/)

## Instalasi dan Penggunaan

Berikut adalah langkah-langkah untuk menjalankan proyek Sweetscape:

1. **Clone Repositori**

    ```bash
    https://github.com/RizkaAuliarahmi/Sweetscape.git
    cd sweetscape
    ```

2. **Setup .NET API**

    ```bash
    cd api
    dotnet watch run
    ```

3. **Setup React App**

    ```bash
    cd client
    npm install
    npm start
    ```
    
