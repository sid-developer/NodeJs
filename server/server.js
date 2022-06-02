const http = require('http');

const host = "localhost";
const port = 3000;

const server = http.createServer( function(req, res){

    console.log('Request is made '+ req);
    console.log('Directory Name : '+__dirname);
    console.log('Filename :'+__filename);

})

server.listen(port, function(){
    console.log('Listing on '+port);
})