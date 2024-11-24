const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Get a single user
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// Create a user
router.post('/', async (req, res) => {
  const user = new user(req.body);
  await user.save();
  res.status(201).json(user);
});

// Update a user
router.put('/:id', async (req, res) => {
  const user = await user.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
});

// Delete a user
router.delete('/:id', async (req, res) => {
  await user.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
