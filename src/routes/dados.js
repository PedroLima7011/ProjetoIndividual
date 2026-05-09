var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

// ROTA DOS GRÁFICOS DASH
router.get("/obterDados/:id", function (req, res) {
    dadosController.obterDados(req, res);
});

router.post("/inserirDados", function (req, res) {
    dadosController.inserirDados(req, res);
});

module.exports = router;