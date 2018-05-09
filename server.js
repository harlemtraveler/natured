const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('This is the home page');
})

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
})
