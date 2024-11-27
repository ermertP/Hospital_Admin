const express = require('express');
const Patient = require('../models/patient');

const router = express.Router();

// Get all Patients
router.get('/', async (req, res) => {
  try {
    await Patient.find().then((result) => {
      res.status(200).setHeader('X-Total-Count', result.length).json(result);
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Get a single Patient
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Patient.findById(id).then((result) => {
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Error: Failed to find Patient with ID: ${req.params.id}`,
        });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Create a Patient
router.post('/', async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save().then((result) => {
      return res.status(201).json(result);
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Update a Patient
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPatient = req.body;
    await Patient.findByIdAndUpdate(id, updatedPatient, {
      new: true,
    }).then((result) => {
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Error: Failed to find Patient with ID: ${req.params.id}`,
        });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Delete a Patient
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Patient.findByIdAndDelete(id).then((result) => {
      if (result) {
        return res.status(200).json(`Deleted Patient ${id} successfully`);
      } else {
        return res.status(400).json({
          message: `Error: No Patient ID found matching ${req.params.id}`,
        });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

module.exports = router;
