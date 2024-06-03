var http = require('http')

http.createServer(function(request,response){
    if(request.url === '/produtos'){
        response.end("<html><h1>Funcionou!, entrou no IF</h1></html>")
    }else{
        response.end("<html><h1>Funcionou! entrou no Else</h1></html>")
    }
}).listen(3000)

console.log('Servidor rodando')