require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');
const authController = require('./controllers/authController');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(authController.receiveToken);

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
