module.exports = function(app){
    app.get('/produtos', function(req, res){
        var connection = app.infra.connectionFactory()
        var produtoBanco = new app.infra.ProdutosDAO(connection)
        produtoBanco.lista(function(err, result){
            res.render('produtos/lista',{lista:result})
        })
        connection.end()
    })

}