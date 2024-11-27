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
      diagnosis_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Diagnosis',
        // required: true,
      },
      date: { type: Date },
      providerNotes: { type: String },
      department_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true,
      },
      provider_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider',
        required: true,
      },
    },
  ],
  appointment_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
      required: true,
    },
  ],
});

module.exports = mongoose.model('Patient', patientSchema);
