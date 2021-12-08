var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    email: String,
    numberPhone: String,
    password: String
});

module.exports = mongoose.model('usuarios', esquema);