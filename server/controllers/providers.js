const express = require('express');
const Provider = require('../models/provider');

const router = express.Router();

// Get all Providers
router.get('/', async (req, res) => {
  try {
    await Provider.find().then((result) => {
      res.status(200).setHeader('X-Total-Count', result.length).json(result);
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Get a single Provider
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Provider.findById(id).then((result) => {
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Error: Failed to find Provider with ID: ${req.params.id}`,
        });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Create a Provider
router.post('/', async (req, res) => {
  try {
    const newProvider = new Provider(req.body);
    await newProvider.save().then((result) => {
      return res.status(201).json(result);
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Update a Provider
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProvider = req.body;
    await Provider.findByIdAndUpdate(id, updatedProvider, {
      new: true,
    }).then((result) => {
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Error: Failed to find Provider with ID: ${req.params.id}`,
        });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Delete a Provider
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Provider.findByIdAndDelete(id).then((result) => {
      if (result) {
        return res.status(200).json(`Deleted Provider ${id} successfully`);
      } else {
        return res.status(400).json({
          message: `Error: No Provider ID found matching ${req.params.id}`,
        });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

module.exports = router;
