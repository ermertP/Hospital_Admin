const mongoose = require('mongoose');
//under development for microservice port
const diagnosisSchema = new mongoose.Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  provider_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider' },
  description: { type: String, required: true },
  code: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DiagnosisCode', // Reference to the coding system
    required: true,
  },
  severity: { type: String, enum: ['Mild', 'Moderate', 'Severe'] },
  date: { type: Date, default: Date.now },
  notes: { type: String },
});

module.exports = mongoose.model('Diagnosis', diagnosisSchema);
