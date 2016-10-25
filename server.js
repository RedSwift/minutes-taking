'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(process.env.MONGODB_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

// routes

app.get('/', function (req, res) {
    res.status(200).json({Text: 'IT WORKS'});
});

