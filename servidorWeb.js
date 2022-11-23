

var http = require('http');
var n = require('./primeiromodulo');
var dia = require('./moduloData');


http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('Aula de Node.js <br>');
    res.write('Aluna: ');
    res.write(n.nome()+ '<br>');

    res.write('Data: ');
    res.write(dia.diaDaSemana()+ '<br>');

 
    res.end('<br> Fé cria!');
       }).listen(80);
