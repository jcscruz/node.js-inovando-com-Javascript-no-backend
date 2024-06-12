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
        res.render('produtos/form', {errosValidacao:{},produto:{}})
    })

    app.post('/produtos', 
    body('titulo').notEmpty().withMessage('O campo não pode estar em branco'),
    
    function(req, res){
        
        const erros = validationResult(req)

        var produto = req.body

        if (erros.isEmpty()) {
            console.log('Cadastrado com sucesso!')
        }else{
            res.format({
                html: function(){
                    res.status(400).render('produtos/form',{errosValidacao:erros.errors,produto:produto})
                },
                json: function(){
                    res.status(400).json(erros.errors),
                    statusc
                }
            })
            return
        }

        var connection = app.infra.connectionFactory()

        var produtosDAO = new app.infra.ProdutosDAO(connection)

        produtosDAO.salva(produto, function(erros, resultados){
            res.redirect('/produtos')
        })
    })

}