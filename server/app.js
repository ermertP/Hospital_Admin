const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const appointment = require('./controllers/appointments');
const departments = require('./controllers/departments');
const patients = require('./controllers/patients');
const providers = require('./controllers/providers');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Controller routes
app.use('/appointments', appointment);
app.use('/departments', departments);
app.use('/patients', patients);
app.use('/providers', providers);

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/react-admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start the server
const PORT = 8080;
app.listen(PORT, () =>
  console.log(`Connection succeeded: Listening on port ${PORT}`)
);
