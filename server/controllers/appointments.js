const express = require('express');
const Appointment = require('../models/appointment');

const router = express.Router();

// Get all appointments
router.get('/', async (req, res) => {
  try {
    await Appointment.find().then((result) => {
      res.status(200).setHeader('X-Total-Count', result.length).json(result);
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Get a single appointment
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Appointment.findById(id).then((result) => {
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Error: Failed to find Appointment with ID: ${req.params.id}`,
        });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Create an appointment
router.post('/', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save().then((result) => {
      return res.status(201).json(result);
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Update an appointment
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAppointment = req.body;
    await Appointment.findByIdAndUpdate(id, updatedAppointment, {
      new: true,
    }).then((result) => {
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Error: Failed to find Appointment with ID: ${req.params.id}`,
        });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Delete an appointment
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Appointment.findByIdAndDelete(id).then((result) => {
      if (result) {
        return res.status(200).json(`Deleted Appointment ${id} successfully`);
      } else {
        return res.status(400).json({
          message: `Error: No Appointment ID found matching ${req.params.id}`,
        });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

module.exports = router;
