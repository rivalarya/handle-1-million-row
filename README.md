# Penyelesaian
Load dataset secara stream, kemudian datanya dimasukan ke dalam array ```results```. Setelah semua data dimasukan, looping array ```results``` kemudian insert satu persatu kedalam database. Silahkan baca kodenya untuk implementasi yang lebih lengkap.

Untuk record monitoring bisa dilihat [disini](https://link).

- Waktu yang dibutuhkan untuk selesai: 1 jam
- Penggunaan cpu tertinggi: 170%
- Penggunaan ram tertinggi: 800 MB

Setelah endpoint selesai, penggunaan ram sejumlah 750+mb masih tidak dilepaskan oleh [Garbage Collection](https://javascript.info/garbage-collection). Saya sudah tunggu selama 15 menit, penggunaan memori masih belum turun juga. Maka dari itu saya simpulkan penyelesaian ini menyebabkan [kebocoran memori](https://learn.snyk.io/lesson/memory-leaks) yang cukup banyak.

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