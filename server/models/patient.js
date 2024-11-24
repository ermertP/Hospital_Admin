const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthdate: { type: Date, required: true },
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  gender: { type: String, required: true },
  weight: { type: Number },
  pronouns: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  pcp: { type: String },
  bloodType: { type: String },
  address: {
    street: {
      type: String,
      default: true,
    },
    town: {
      type: String,
      default: false,
    },
    state: {
      type: String,
      default: false,
    },
    zipCode: {
      type: Boolean,
      default: false,
    },
  },
  diagnoses: [
    {
      name: { type: String, unique: true },
      date: { type: Date },
      providerNotes: { type: String },
      // department: {type: String, max: 100}, // to do: change to a reference ID
      // provider: {type: String, max: 100}, // to do: change to a reference ID
    },
  ],
  appointments: [
    {
      //appointment_id: { type: String, unique: true },// to do: change to a reference ID
    },
  ],
});

module.exports = mongoose.model('Patient', patientSchema);
