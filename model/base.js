const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/movie_database', { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongodb connnect!')
});


module.exports = { mongoose };