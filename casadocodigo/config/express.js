var express = require('express')
var load = require('express-load')
var bodyParcer = require('body-parser')

module.exports = function() {

    var app = express()
    
    app.use(express.static('./app/public/'));

    app.set('view engine', 'ejs')
    app.set('views', './App/views')

    app.use(bodyParcer.urlencoded({extended: true}))
    app.use(bodyParcer.json())

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app)

    app.use(function(req,res,next){
        res.status(404).render('erros/404')
        next()
    })

    app.use(function(error,req,res,next){
        if(process.env.NODE_ENV == 'production'){
            res.status(500).render('erros/500')
        }
        
        next()
    })

    return app
}


