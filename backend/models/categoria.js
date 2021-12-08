var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    id: number,
    nombre: string,
    icono: string
});

module.exports = mongoose.model('categorias', esquema);