var express = require('../config/express')()
var request = require('supertest')(express)

describe('ProdutosController', function(){
//node-database-cleaner
    // beforeEach(function(done){
    //     var conn = express.infra.connectionFactory()
    //     conn.query("delete from produtos", function(ex, result){
    //         if(!ex){
    //             done()
    //         }            
    //     })
    // })

    it('#listagem json', function(done){
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type',/json/)
            .expect(200, done)
        })

    it('#cadastro de livro com erro nome livro não preenchido', function(done){
        request.post('/produtos')
        .send({
            titulo: "",
            descricao: "descrição do livro"
        })
        .expect(400,done)
    })

    it('#cadastro de livro com sucesso', function(done){
        request.post('/produtos')
        .send({
            titulo: "livrosss",
            descricao: "descrição do livro"
        })
        .expect(302,done)
    })

    
})