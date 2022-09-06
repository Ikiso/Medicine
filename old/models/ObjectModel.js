const mongoose = require('mongoose');
const {Types} = require("mongoose");

const schema = new mongoose.Schema({
    value: {type: String, required: true},
    morbidity_type: {type: String, required: true},
    population: {type: String, required: true},
    year: {type: String, required: true},
    disease_class: {type: String, required: true},
    populated_area: {type: String, required: true},
})

module.exports = mongoose.model('Object', schema)