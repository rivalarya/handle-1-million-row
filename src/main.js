const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const { insertManyRows } = require('./repository');
const app = express();

const DATASET_PATH = `${process.cwd()}/yelp_database.csv`
const BATCH_SIZE = 5000 // Set ukuran batch data yang akan di insert

// Endpoint '/'
app.get('/', (req, res) => {
  console.log('proses dimulai!')
  const results = [] // Penyimpanan sementara
  fs.createReadStream(DATASET_PATH)
    .pipe(csv()) // Menggunakan csv-parser agar tidak perlu memproses data secara manual
    .on('data', async (data) => {
      results.push(data) // Masukan data ke penyimpanan sementara

      // Tambahkan kondisinya disini
      if (results.length >= BATCH_SIZE) {
        /**
         * Disini saya menggunakan "splice" dibanding "slice" karena "splice" itu memindahkan data dari variabel sumber ke variabel sekarang. Sedangkan slice itu meng-copy data dari variabel sumber ke variabel sekarang. Maka dari itu menggunakan "slice" akan lebih menggunakan memori(ram).
         */
        const data = results.splice(0, BATCH_SIZE)

        await insertManyRows(data) // masukan datanya
      }
    })
    .on('end', () => {
      // ketika stream selesai
      // Beri response sederhana hanya supaya terlihat berapa lama postman melakukan request ke endpoint ini
      res.send('done')
      console.log('proses selesai!')
    });
});

// Menjalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});
