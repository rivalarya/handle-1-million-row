const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const { insertOneRow } = require('./repository');
const app = express();

const DATASET_PATH = `${process.cwd()}/yelp_database.csv`

// Endpoint '/'
app.get('/', (req, res) => {
  console.log('proses dimulai!')
  const results = [] // Penyimpanan sementara
  fs.createReadStream(DATASET_PATH)
    .pipe(csv()) // Menggunakan csv-parser agar tidak perlu memproses data secara manual
    .on('data', (data) => {
      results.push(data) // Masukan data ke penyimpanan sementara
    })
    .on('end', async () => {
      // ketika stream selesai
      // Loop-ing data satu persatu kemudian masukan datanya
      for (const row of results) {
        await insertOneRow(row)
      }

      // Beri response sederhana hanya supaya terlihat berapa lama postman melakukan request ke endpoint ini
      res.send('done')
      console.log('proses selesai!')
    });
});

// Menjalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});
