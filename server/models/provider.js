const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  currentEmployee: { type: Boolean, default: true },
  officePhone: { type: Number, required: true },
  personalPhone: { type: Number, required: true, unique: true },
  department: { type: String, required: true, unique: true },
  patient_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
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

module.exports = mongoose.model('Provider', providerSchema);
