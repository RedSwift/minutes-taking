'use strict';

let mongoose = require('mongoose');

const minutesSchema = new mongoose.Schema({
    date: { type: String, required: true},
    posts: []
});

let Minutes = mongoose.model('Minutes', minutesSchema);
module.exports = Minutes;