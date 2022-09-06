const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    year: {type: String, required: true, unique: true}
})

module.exports = mongoose.model('Year', schema)