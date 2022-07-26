const express = require('express');
const app = express();

app.get('/', function(res, res){
    res.send('Hello World');
})

app.listen(3000);