var mysql = require('mysql')

function createDBconnection(){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'led_site',
        password: 'pSz6#I52E4YG',
        database: 'led_site',
        port: '3306'
    })

    return connection

}

module.exports = function(){
    return createDBconnection
}
