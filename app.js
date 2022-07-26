const express = require('express');
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    // res.send('Hello SID');
    res.sendFile('./views/index.html',{root:__dirname})
})

app.get('/add-item', (req,res) =>{

    // res.send('Its an another Request');
    res.sendFile('./views/add-item.html',{root:__dirname})
});

app.use((req,res) =>{
    res.sendFile('./views/404.html',{root:__dirname})
})