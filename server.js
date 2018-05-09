const express = require('express');
const logger = require('morgan');

const productRouter = require('./routes/productRouter');

const app = express();

app.use(logger('dev'));

const PORT = process.env.PORT || 3001;

app.use('/products', productRouter);

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
})
