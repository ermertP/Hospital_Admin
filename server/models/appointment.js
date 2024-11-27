const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ['SCHEDULED', 'CANCELED', 'COMPLETE', 'INCOMPLETE', 'RESCHEDULED'],
  },
  date: { type: Date },
  time: { type: Number },
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provider',
    required: true,
  },
  provider_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provider',
    required: true,
  },
  department_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
  },
  providerNotes: { type: String },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
