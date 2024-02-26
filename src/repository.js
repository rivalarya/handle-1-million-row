const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/insert_1_million_rows';

(async () => {
  try {
    // Buat koneksi ke mongodb
    await mongoose.connect(dbURI);
    console.log('Mongoose terhubung ke ' + dbURI);

    truncateCollection() // Kosongkan collection setiap pertama kali dijalankan
  } catch (error) {
    console.error('Koneksi MongoDB error: ' + error);
  }
})();

// Buat schemanya
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  ID: { type: String, required: true },
  Time_GMT: { type: Date, default: Date.now },
  Phone: { type: String },
  Organization: { type: String },
  OLF: { type: String },
  Rating: { type: Number },
  NumberReview: { type: Number },
  Category: { type: String },
  Country: { type: String },
  CountryCode: { type: String },
  State: { type: String },
  City: { type: String },
  Street: { type: String },
  Building: { type: String }
});

const DataModel = mongoose.model('Data', dataSchema);

function truncateCollection() {
  DataModel.deleteMany({})
    .then(_ => console.log('collection truncated')).
    catch(error => console.error(error));
}

// Fungsi untuk memasukan data satu persatu
async function insertOneRow(data) {
  await DataModel.create(data)
    .then(_ => console.log(`id ${data.ID} berhasil ditambahkan.`)) // console.log() menyumbang penggunaan ram yang lumayan(sekitar 18mb per 100k console.log()). comment saja line ini saat production
    .catch(error => console.error(error));
}

module.exports = {
  insertOneRow
};
