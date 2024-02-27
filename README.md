# Penyelesaian
Penyelesaian kali ini menggunakan metode batch.
Load dataset secara stream, kemudian datanya dimasukan ke dalam array ```results```. Selagi data dimasukan ke ```results```, tambahkan pengkondisian untuk memasukan data yang sudah ada sesuai batch yang sudah di set di kode. Jadi tidak perlu menunggu semua data terkumpul di ```results``` terlebih dahulu. Silahkan baca kodenya untuk implementasi yang lebih lengkap.

Untuk record monitoring bisa dilihat [disini](https://youtu.be/oY3YgDyVMvw).

- Waktu yang dibutuhkan untuk selesai: 13 menit
- Penggunaan cpu tertinggi: -+147%
- Penggunaan ram tertinggi: -+160 MB

Setelah endpoint selesai, penggunaan ram kembali ke awal seperti saat aplikasi pertama kali dijalankan. Yang berarti memori berhasil dilepaskan oleh [Garbage Collection](https://javascript.info/garbage-collection).

# Spesifikasi Server
- Google Compute Engine
  - Machine type: e2-small
  - CPU platform: Intel Broadwell
  - Architecture: x86/64
  - OS: Debian 11
  - vCPU: 0.5-2 vCPU (1 shared core)
  - Memory: 2 GB

# Informasi
- Nodejs: 18.19.1
- MongoDB: 7.0.5

# Masalah
- Setelah log "proses selesai!" muncul, endpoint tidak memberikan response "done" ke postman
