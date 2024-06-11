const { check, validationResult, body } = require('express-validator');


module.exports = function(app){
    app.get('/produtos', function(req, res){
        var connection = app.infra.connectionFactory()
        var produtosDAO = new app.infra.ProdutosDAO(connection)
        produtosDAO.lista(function(err, result){
            res.format({
                html: function(){
                    res.render('produtos/lista',{lista:result})
                },
                json: function(){
                    res.json(result)
                }
            })
            
        })
        connection.end()
    })


    app.get('/produtos/form', function(req, res){
        res.render('produtos/form')
    })

    app.post('/produtos', 
    body('titulo').notEmpty().withMessage('O campo não pode estar em branco'),
    
    function(req, res){
        
        const erros = validationResult(req)

        if (erros.isEmpty()) {
            console.log('Cadastrado com sucesso!')
        }else{
            res.render('produtos/form')
            console.log('Gerou erros.')
            return
        }

        var produto = req.body

        var connection = app.infra.connectionFactory()

        var produtosDAO = new app.infra.ProdutosDAO(connection)

        produtosDAO.salva(produto, function(erros, resultados){
            console.log(erros)
            res.redirect('/produtos')
        })
    })

}