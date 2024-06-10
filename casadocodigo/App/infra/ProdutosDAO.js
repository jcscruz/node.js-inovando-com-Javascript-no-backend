function ProdutosBanco(connection){
    this._connection = connection
}

ProdutosBanco.prototype.lista = function(callback){
    this._connection.query('select * from livros', callback)
}


module.exports = function(){
    return ProdutosBanco
}
