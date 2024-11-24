const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  currentEmployee: { type: Boolean, default: true },
  officePhone: { type: Number, required: true },
  personalPhone: { type: Number, required: true, unique: true },
  department: { type: String, required: true, unique: true },
  patients: [
    {
      // patient_id: {type: String, max: 100}, // to do: change to a reference ID
    },
  ],
  appointments: [
    {
      // appointment_id: {type: String, max: 100}, // to do: change to a reference ID
    },
  ],
});

module.exports = mongoose.model('Provider', providerSchema);
