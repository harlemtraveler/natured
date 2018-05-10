require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const productRouter = require('./routes/productRouter');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.use('/products', productRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
