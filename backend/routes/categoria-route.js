var express = require('express');
var router = express.Router();
var usuario = require('../models/categoria');

//Crear una categoria
router.post('/', function(req, res) {
    let u = new usuario({
        nombre: req.body.nombre,
        icono: req.body.icono
    });
    u.save().then(result => {
        res.send(result);
        res.end();
    }).catch(result => {
        res.send(error);
        res.end();
    });
});

//Obtener todas las categorias
router.get('/', function(req, res) {
    usuario.find().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });

});

module.exports = router;