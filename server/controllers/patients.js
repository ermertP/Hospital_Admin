const express = require('express');
const Patient = require('../models/patient');

const router = express.Router();

// Get all patients
router.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

// Get a single patient
router.get('/:id', async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  res.json(patient);
});

// Create a patient
router.post('/', async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.status(201).json(patient);
});

// Update a patient
router.put('/:id', async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(patient);
});

// Delete a patient
router.delete('/:id', async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
