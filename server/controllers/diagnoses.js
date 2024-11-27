const express = require('express');
const Diagnosis = require('../models/Diagnosiss');

const router = express.Router();
//controller is in development
// Get all Diagnoses
router.get('/', async (req, res) => {
  try {
    await Diagnosis.find().then((result) => {
      res.status(200).setHeader('X-Total-Count', result.length).json(result);
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Get a single Diagnosis
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Diagnosis.findById(id).then((result) => {
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Error: Failed to find Diagnosis with ID: ${req.params.id}`,
        });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Create a Diagnosis
router.post('/', async (req, res) => {
  try {
    const newDiagnosis = new Diagnosis(req.body);
    await newDiagnosis.save().then((result) => {
      return res.status(201).json(result);
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Update an Diagnosis
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDiagnosis = req.body;
    await Diagnosis.findByIdAndUpdate(id, updatedDiagnosis, {
      new: true,
    }).then((result) => {
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Error: Failed to find Diagnosis with ID: ${req.params.id}`,
        });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Delete an Diagnosis
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Diagnosis.findByIdAndDelete(id).then((result) => {
      if (result) {
        return res.status(200).json(`Deleted Diagnosis ${id} successfully`);
      } else {
        return res.status(400).json({
          message: `Error: No Diagnosis ID found matching ${req.params.id}`,
        });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

module.exports = router;
