const mongoose = require('mongoose');

const NFCSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required:true,
  },
  pesel: {
    type: String,
    required: false,
  },
  birthDate: {
    type: String,
    required: false,
  },
  bloodType: {
    type: String,
    required: false,
  },
  allergies: {
    type: String,
    required: false,
  },
  medications: {
    type: String,
    required: false,
  },
  chronicDiseases: {
    type: String,
    required: false,
  },
  assignedDoctorId: {
    type: String,
    required: false,
  },
  lastUpdate: {
    type: String,
    required: false,
  }
});


const NFC = mongoose.model('NFC', NFCSchema);

module.exports = NFC;