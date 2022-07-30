const mongoose = require('mongoose');
const {Types} = require("mongoose");

const schema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    "type_populated_area.$id": {type: Types.ObjectId, required: true},
    "region.$id": {type: Types.ObjectId, required: true},
})

module.exports = mongoose.model('PopulatedArea', schema)