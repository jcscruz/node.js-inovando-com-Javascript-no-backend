module.exports = function(app){
    app.get('/promocoes/form', function(req, res){
        var connection = app.infra.connectionFactory()
        var produtosDAO = new app.infra.ProdutosDAO(connection)
        produtosDAO.lista(function(err, result){
            res.render('promocoes/form',{lista:result})
        })
        connection.end()
    })

    app.post('/promocoes', function(req, res){
        var promocoes = req.body
        
        app.get('io').emit('novaPromocao', promocoes)
        console.log(promocoes)
        res.redirect('/promocoes/form')
    })
}