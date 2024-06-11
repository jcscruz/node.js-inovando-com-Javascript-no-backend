var express = require('express')
var load = require('express-load')
var bodyParcer = require('body-parser')


module.exports = function() {

    var app = express()
    app.set('view engine', 'ejs')
    app.set('views', './App/views')
    app.use(bodyParcer.urlencoded({extended: true}))
    app.use(bodyParcer.json())
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app)
    return app
}


