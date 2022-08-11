const express = require('express');
const mongoose = require('mongoose');
const UserInfo = require('./models/user_info');
// console.log(UserInfo);
// process.exit();
const app = express();

app.use(express.urlencoded({extended:true}))

// const mongoose = require('mongoose');
const mongodb = 'mongodb+srv://mongo_db_user:CWd9yA874sHLaxBM@cluster0.44acw.mongodb.net/DB1?retryWrites=true&w=majority'

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
        {name : 'A', age : 31},
        {name : 'B', age :31},
        {name : 'C', age : 60},
        {name : 'D', age : 56},
    ]

    res.render('index', {items}); //render file using EJS
})

app.get('/get-items', (req,res) =>{
    UserInfo.find().then(result=>{

        res.render('index', {items : result})

    }).catch(err =>{

    })
})

app.post('/save-item', (req, res) =>{

    // res.send(req.body)
    const savedata = UserInfo(req.body)
    
    savedata.save().then(result =>{
        res.redirect('/get-items')

    }).catch(err =>{
        res.send(err)
    })

})

// app.get('/get-item',(req, res) =>{

//     UserInfo.findById('62f48a42a3b0d4b67ab6cfc6').then(result => {
//         res.send(result)
//     }).catch(err =>{

//     })

// })

app.get('/add-item', (req,res) =>{

    // const User_Info = new UserInfo({
    //     name : 'Roy',
    //     email : 'roy@testmail.com'
    // })

    // User_Info.save()
    // .then((result)=>{
    //     res.send(result)
    // }).catch((err) =>{
    //     console.log('Error '+err);
    // })

    // res.send('Its an another Request');
    // res.sendFile('./views/add-item.html',{root:__dirname})
    res.render('add-item'); //render file using EJS
});

app.use((req,res) =>{
    // res.sendFile('./views/404.html',{root:__dirname})
    res.render('404'); //render file using EJS
})