const express = require('express');
const Provider = require('../models/provider');

const router = express.Router();

// Get all providers
router.get('/', async (req, res) => {
  const providers = await Provider.find();
  res.json(providers);
});

// Get a single provider
router.get('/:id', async (req, res) => {
  const provider = await Provider.findById(req.params.id);
  res.json(provider);
});

// Create a provider
router.post('/', async (req, res) => {
  const provider = new Provider(req.body);
  await provider.save();
  res.status(201).json(provider);
});

// Update a provider
router.put('/:id', async (req, res) => {
  const provider = await Provider.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(provider);
});

// Delete a provider
router.delete('/:id', async (req, res) => {
  await Provider.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
