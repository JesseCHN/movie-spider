const mongoose = require('./base.js').mongoose

let playingSchema = new mongoose.Schema({
    title: String,
    dbScore: String,
    releaseYear: String,
    duration: String,
    region: String,
    director: String,
    actors: String,
    detailUrl: String
});

let Playing = mongoose.model('Playing', playingSchema);

module.exports = Playing;