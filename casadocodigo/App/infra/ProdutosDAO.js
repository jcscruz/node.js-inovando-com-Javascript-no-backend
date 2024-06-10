function ProdutosBanco(connection){
    this._connection = connection
}

ProdutosBanco.prototype.lista = function(callback){
    this._connection.query('select * from livros', callback)
}

ProdutosBanco.prototype.salva = function(livro,callback){
    console.log(livro)
    this._connection.query('insert into livros set ?',livro,callback)
}

module.exports = function(){
    return ProdutosBanco
}
