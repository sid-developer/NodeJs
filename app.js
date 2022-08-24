const express = require('express')
const app = express()

app.use(express.urlencoded({extended : true}));

const mongoose = require('mongoose')
const mongodb = 'mongodb+srv://mongo_db_user:W85t2FUhQ9hcwBk2@cluster0.5qiqpdd.mongodb.net/sample_db?retryWrites=true&w=majority'

const user_schema = require('./models/user-schema');

mongoose.connect(mongodb).then( () =>{

    app.listen(3000);

}).catch( (err) =>{

    console.log(err)

})


app.set('view engine','ejs')

app.get('/', (req, res) => {

    user_schema.find().then( (result) => {
        res.render('index',{data : result})
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

app.get('/add-user', (req, res) =>{

    res.render('add-user');

})

app.post('/save-user', (req, res) =>{

    User_Schema = user_schema(req.body)
    User_Schema.save().then( (result) =>{

        res.redirect('/')

    }).catch( (err) =>{
        res.send('Error: '+err)

    })

})

app.get('/user-details/:id', (req, res) =>{
    const user_id = req.params.id;

    user_schema.findById(user_id).then( (result) =>{

        res.render('user-details',{'data' : result})

    }).catch( (err) =>{
        res.send("Error:"+err)
    })

})

app.get('/user-delete/:id', (req, res) =>{

 const id = req.params.id

  user_schema.findByIdAndDelete(id).then( (result) =>{

    res.redirect('/')

  }).catch( (err) => {

    res.send('Error:'+err)

  })

})

app.use( (req, res) => {
    res.render('404')
})