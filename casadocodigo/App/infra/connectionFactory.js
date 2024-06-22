var mysql = require('mysql')

function createDBconnection(){
    if(!process.env.NODE_ENV){
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'nds',
            port: '3306'
        })
    }

    if(process.env.NODE_ENV == 'test'){
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'nds_test',
            port: '3306'
        })
    }

    return connection

}

module.exports = function(){
    return createDBconnection
}
