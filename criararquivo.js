var fs = require('fs');

fs.appendFile('novoArquivo.txt', 'arquivo', function (err){
    if(err) throw err;
    console.log('executado!');
});