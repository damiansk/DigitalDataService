const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const router = require('./router');
const app = express();


mongoose.connect('mongodb://localhost/digitaldata');

app.use(morgan('combined'));
app.use(bodyParser.json());
router(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
