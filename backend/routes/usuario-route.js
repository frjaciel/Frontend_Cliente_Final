var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');

//Crear un usuario
router.post('/', function(req, res) {
    let u = new usuario({
        email: req.body.email,
        numberPhone: req.body.numberPhone,
        password: req.body.password
    });
    u.save().then(result => {
        res.send(result);
        res.end();
    }).catch(result => {
        res.send(error);
        res.end();
    });
});

//login
router.get('/login/:usuario/:contrasena', function(req, res) {
    usuario.findOne({ email: req.params.usuario, password: req.params.contrasena })
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});

module.exports = router;