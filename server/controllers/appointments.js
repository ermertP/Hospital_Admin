const express = require('express');
const Appointment = require('../models/appointment');

const router = express.Router();

// Get all appointments
router.get('/', async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});

// Get a single appointment
router.get('/:id', async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  res.json(appointment);
});

// Create a appointment
router.post('/', async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.status(201).json(appointment);
});

// Update a appointment
router.put('/:id', async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json(appointment);
});

// Delete a appointment
router.delete('/:id', async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
