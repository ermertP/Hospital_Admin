const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  active: { type: Boolean, default: true },
  administrators: [
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phoneNumber: { type: Number, required: true },
      department_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true,
      },
      provider_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider',
        required: true,
      },
    },
  ],
  provider_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Provider',
      required: true,
    },
  ],
  address: {
    street: {
      type: String,
    },
    town: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
  },
});

module.exports = mongoose.model('Department', departmentSchema);
