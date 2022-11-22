const express = require('express');
const mongoose = require('mongoose');

// const bodyParser = require('body-parser')
const app = express();

const save_player = require('./models/player_info.js');

app.use(express.urlencoded({extended: true}))

const mongodb_url = "mongodb+srv://mongo_db_user:W85t2FUhQ9hcwBk2@cluster0.5qiqpdd.mongodb.net/sample_data";

app.set('view engine', 'ejs');

mongoose.connect(mongodb_url).then(() => {
  //connected  
  console.log('connected');

  app.listen(3000);

}).catch((err) => {
    console.log(err);
})

app.get('/', function(req, res){

    // const getData = [
    //     {'first_name' : 'Rohit', 'last_name' : 'Sharma', 'phone' : '9852147896'},
    //     {'first_name' : 'Virat', 'last_name' : 'Kohli', 'phone' : '9852158952'},
    //     {'first_name' : 'Rishab', 'last_name' : 'Pant', 'phone' : '98521526393'},
    //     {'first_name' : 'Dinesh', 'last_name' : 'Kartik', 'phone' : '9852158959'},
    //     {'first_name' : 'Jasprit', 'last_name' : 'Bumrah', 'phone' : '9852158882'}
    // ]

    // res.render('index', {getData : [] })

    res.redirect('./get-players');
})

app.get('/add', function(req, res){
    res.render('add')
})

app.post('/save-data', function(req, res){

    // req.body.first_name -> fetch Post param using req.body

    // req.params.first_name -> fetch Get param using req.params

    // req.query.first_name -> fetch Get param using req.query

    const first_name  = req.body.first_name;
    const last_name  = req.body.last_name;
    const phone  = req.body.phone;

    const save_data = new save_player({

        first_name : first_name,
        last_name : last_name,
        phone : phone

    })

    // const save_data =  save_player(req.body); //saving directy bcoz html variable names are matched with schema variable names

    // const save_data = new save_player({
    //     first_name : 'AA',
    //     last_name : 'B',
    //     phone : 9858952589
    // })

    save_data.save().then((result) =>{
        res.redirect('/');
    }).catch((err) =>{
        res.send(err);
    })

})

app.get('/get-players', (req, res) =>{
        
    save_player.find().then( (result) =>{
   
        res.render('index', {result})

    }).catch((err) => {
        res.send(err)
    })

})

app.post('/delete-player', (req, res) =>{

    const player_id = req.body.player_id

    save_player.findByIdAndDelete(player_id).then( (result) =>{
        res.send('200')
    }).catch( (error) =>{
        res.send('500');
    })

})

app.get('/get-player-details/:player_id', (req, res) =>{

    const get_player_id = req.params.player_id;

    save_player.findById(get_player_id).then( (result) =>{
        res.json(result);
    }).catch( (error) =>{
        res.send('500')
    })

})

app.put('/update-player-data', (req, res) => {

    save_player.findByIdAndUpdate(req.body._id, req.body).then( (result) =>{
        res.send('{"res_code" : "200", "res_msg" : "success"}')
    }).catch((err) =>{
        res.send(err)
    })

})

app.use(function(req, res){
    res.render('404')
})