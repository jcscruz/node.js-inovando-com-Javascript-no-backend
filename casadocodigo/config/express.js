var app = require('express')()
app.set('view engine', 'ejs')
app.set('views', './App/views')

module.exports = function() {
    return app
}


