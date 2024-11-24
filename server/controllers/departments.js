const express = require('express');
const Department = require('../models/department');

const router = express.Router();

// Get all departments
router.get('/', async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
});

// Get a single department
router.get('/:id', async (req, res) => {
  const department = await Department.findById(req.params.id);
  res.json(department);
});

// Create a department
router.post('/', async (req, res) => {
  const department = new Department(req.body);
  await Department.save();
  res.status(201).json(department);
});

// Update a department
router.put('/:id', async (req, res) => {
  const Department = await department.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json(department);
});

// Delete a department
router.delete('/:id', async (req, res) => {
  await Department.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
