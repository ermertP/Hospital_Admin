const express = require('express');
const path = require('path'); // NEW
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
const mockResponse = {
  test: 'this is a test',
};
app.get('/api', (req, res) => {
  console.log('REQUEST HIT SERVER');
  res.send(mockResponse);
});

app.listen(port, function () {
  console.log('Server listening on port: ' + port);
});
