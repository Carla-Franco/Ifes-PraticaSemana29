var express = require('express');
var router = express.Router();
var estados = ['Espírito Santo', 'Santa Catarina', 'Rio de Janeiro', 'São Paulo', 'Minas Gerais'];

router.get('/', function(req, res) {
 res.send("Prática da 1° semana do F2M4: Node.js intermediário, CRUD com Sequelize, cookies e sessões.");
});

router.get('/estados/:id', (req, res) => {
 let id = req.params.id;
 return res.json([estados[id]])
});

router.post('/estados/cadastrar', (req, res) => {
 let nome = req.body.nome;
 estados[(estados.length)] = nome;
 return res.json([estados[(estados.length - 1)]]);
});

router.get("/estados", function(req, res) {
 res.render("form");
});

module.exports = router;