const mongoose = require('mongoose');
const {Types} = require("mongoose");

const schema = new mongoose.Schema({
    value: {type: String, required: true},
    "morbidity_type.$id": {type: Types.ObjectId, required: true},
    "population.$id": {type: Types.ObjectId, required: true},
    "year.$id": {type: Types.ObjectId, required: true},
    "disease_class.$id": {type: Types.ObjectId, required: true},
    "populated_area.$id": {type: Types.ObjectId, required: true}
})

module.exports = mongoose.model('Value', schema)