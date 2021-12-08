var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var database = require('./modules/database');
var usuariosRouter = require('./routes/usuario-route');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/usuarios', usuariosRouter);

app.get('/', function(req, res) {
    res.send("Servidores backend en Linea");
});

app.listen(8889, function() {
    console.log("Servidor levantado");
});