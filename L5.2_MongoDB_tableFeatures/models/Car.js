const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    brand: String,
    brandnew: Boolean,
    accidents: [{ ac: String }], //array
    model: {
        bb: String,
        year: Number
    }
});

module.exports = mongoose.model('car', CarSchema);