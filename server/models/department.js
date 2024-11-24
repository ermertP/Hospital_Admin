const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  active: { type: Boolean, default: true },
  administrators: [
    {
      name: { type: String, required: true },
      email: { type: String, unique: true, required: true },
      phoneNumber: { type: Number, required: true },
      // department: {type: String, max: 100}, // to do: change to a reference ID
      // provider: {type: String, max: 100}, // to do: change to a reference ID
    },
  ],
  providers: [
    {
      //provider_id: { type: String, unique: true },// to do: change to a reference ID
    },
  ],
  address: {
    street: {
      type: String,
      default: true,
    },
    town: {
      type: String,
      default: false,
    },
    state: {
      type: String,
      default: false,
    },
    zipCode: {
      type: Boolean,
      default: false,
    },
  },
});

module.exports = mongoose.model('Department', departmentSchema);
