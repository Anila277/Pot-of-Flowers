const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// A MODEL IS A SINGULAR REPRESENTATION OF OUR DATA

const flowerSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    care: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
}, { timestamps: true});

module.exports = mongoose.model('Flower', flowerSchema);