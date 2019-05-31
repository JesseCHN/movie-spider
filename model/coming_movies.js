const mongoose = require('./base.js').mongoose

let comingSchema = new mongoose.Schema({
    title: String,
    date: String,
    type: String,
    country: String,
    fork: String,
    detailUrl: String
});

let Coming = mongoose.model('Coming', comingSchema);

module.exports = Coming;