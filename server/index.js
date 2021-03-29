const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const PORT = 8000;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  console.log(`server listening on localhost: ${PORT}`);
});