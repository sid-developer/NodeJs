const express = require('express');
const mongoose = require('mongoose');
const UserInfo = require('./models/user_info');
// console.log(UserInfo);
// process.exit();
const app = express();

// const mongoose = require('mongoose');
const mongodb = 'mongodb+srv://mongo_db_user:<Password>@cluster0.44acw.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongodb).then( ()=> {

    console.log('connected')

    app.listen(3000);

}).catch( (err) => {
    console.log('Error: '+err)
}) //connected mongodb using mongoose



// mongoose.connect(mongodb).then( () =>{

//     console.log('connected');

// }).catch( (err) => {

//     console.log('Error:'+err);

// })

app.set('view engine', 'ejs');

// app.listen(3000);

app.get('/', (req, res) => {
    // res.send('Hello SID');
    // res.sendFile('./views/index.html',{root:__dirname})

    const items = [
        {name : 'SID', age : 31},
        {name : 'Heena', age :31},
        {name : 'Sudhir', age : 60},
        {name : 'Swati', age : 56},
    ]

    res.render('index', {items}); //render file using EJS
})

app.get('/add-item', (req,res) =>{

    const User_Info = new UserInfo({
        name : 'Roy',
        email : 'roy@testmail.com'
    })

    User_Info.save()
    // .then((result)=>{
    //     res.send(result)
    // })

    // res.send('Its an another Request');
    // res.sendFile('./views/add-item.html',{root:__dirname})
    res.render('add-item'); //render file using EJS
});

app.use((req,res) =>{
    // res.sendFile('./views/404.html',{root:__dirname})
    res.render('404'); //render file using EJS
})