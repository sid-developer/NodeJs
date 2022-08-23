const express = require('express')
const app = express()

app.use(express.urlencoded({extended : true}));

const mongoose = require('mongoose')
const mongodb = 'mongodb+srv://mongo_db_user:<Password>@cluster0.5qiqpdd.mongodb.net/sample_db?retryWrites=true&w=majority'

const user_schema = require('./models/user-schema');

mongoose.connect(mongodb).then( () =>{

    app.listen(3000);

}).catch( (err) =>{

    console.log(err)

})


app.set('view engine','ejs')

app.get('/', (req, res) => {

    user_schema.find().then( (result) => {
        res.render('index',{items : result})
    }).catch( (err) =>{
        res.send('Error:'+err);
    })

    
})

app.get('/add-item', (req, res) => {
    res.render('add-item')
})

app.post('/save-item', (req, res) =>{

    // console.log(req.body);
    const save_data = user_schema(req.body)
    save_data.save().then( () =>{
        res.redirect('/')
    }).catch( (err) =>{
        res.send('failed '+err);
    })

})

app.use( (req, res) => {
    res.render('404')
})