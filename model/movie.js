const mongoose = require('./base.js').mongoose

let movieSchema = new mongoose.Schema({
    title: String,
    releaseYear: String,
    poster: String,
    director: String,
    actors: String,
    type: String,
    date: String,
    duration: String,
    summary: String
});

let Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;