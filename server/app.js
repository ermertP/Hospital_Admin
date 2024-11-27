const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
const appointment = require('./controllers/appointments');
const departments = require('./controllers/departments');
const patients = require('./controllers/patients');
const providers = require('./controllers/providers');

const app = express();

// Middleware
app.use(
  cors({
    exposedHeaders: 'X-TOTAL-Count', // Expose Content-Range for React Admin
  })
);
app.use(bodyParser.json());

// Controller routes
app.use('/appointments', appointment);
app.use('/departments', departments);
app.use('/patients', patients);
app.use('/providers', providers);

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Start the server
const PORT = 8080;
app.listen(PORT, () =>
  console.log(`Connection succeeded: Listening on port ${PORT}`)
);
