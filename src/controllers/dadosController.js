var dadosModel = require("../models/dadosModel");

function obterDados(req, res) {
    var id = req.params.id;
    console.log(id);

    if (id == undefined) {
        res.status(400).send("O id esta undefined");
    } else {
        dadosModel.obterDados(id)
            .then(
                function (resultadoDados) {
                    console.log(`\nResultados encontrados: ${resultadoDados.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoDados)}`); // transforma JSON em String

                    if (resultadoDados.length > 0) {
                        res.json(resultadoDados);
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao puxar os dados! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function obterDadosRanking(req, res) {

    dadosModel.obterDadosRanking()
        .then(
            function (resultadoDadosRanking) {
                console.log(`\nResultados encontrados: ${resultadoDadosRanking.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoDadosRanking)}`); // transforma JSON em String

                if (resultadoDadosRanking.length > 0) {
                    res.json(resultadoDadosRanking);
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao puxar os dados! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function inserirDados(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.fkUsuarioServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var pontuacao = req.body.pontuacaoServer;

    // Faça as validações dos valores
    if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Seu acertos estão undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Seu erros estão undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("Sua pontuação está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo dadosModel.js
        dadosModel.inserirDados(fkUsuario, acertos, erros, pontuacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao inserir o quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    obterDados,
    inserirDados,
    obterDadosRanking
}