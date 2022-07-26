const http = require('http');
const fs = require('fs');
const moment = require('moment');
const port = 3000;
const servername = 'localhost';

const chrimas = '2022-12-25';

console.log(moment(chrimas).format('LL')); //format Date using Moment Library

const server = http.createServer((req, res) => {

    let route = "../view/";

    switch(req.url){

        case '/':
        route += 'index.html';
        res.statusCode = 404;
        break;

        case '/contact':
        route += 'contact.html';
        res.statusCode = 404;
        break;

        case '/contact-us':
        res.statusCode = 301;
        res.setHeader('Location', '../view/contact.html');
        res.end();
        break;

        default:
        route += '404.html';
        res.statusCode = 404;
        break;        
    }

    res.setHeader('Content-Type','text/html');
    fs.readFile(route ,(err, data)=>{

        if(!err){
            res.write(data);
        }else{
            console.log(err);
        }

        res.end();

    })

})

server.listen(port,()=>{

})