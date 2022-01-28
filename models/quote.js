const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    fullQuote: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
     }
});

module.exports = mongoose.model('quote', quoteSchema);