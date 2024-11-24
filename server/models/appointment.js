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
  //   patient, -- ref ID
  //   provider -- ref ID
  //department -- ref ID
  providerNotes: { type: String },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
