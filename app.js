const express = require('express')
const app = express()

const mongoose = require('mongoose')
const mongodb = ''

mongoose.connect(mongodb).then( () =>{

    app.listen(3000);

}).catch( (err) =>{

    console.log(err)

})


app.set('view engine','ejs')

app.get('/', (req, res) => {

    const items = [
        {name : 'A', mob : 9858962589},
        {name : 'B', mob : 9858962580},
        {name : 'C', mob : 9808962580},
        {name : 'D', mob : 9828962580},
    ]

    res.render('index', {items : items})
})

app.get('/add-item', (req, res) => {
    res.render('add-item')
})

app.use( (req, res) => {
    res.render('404')
})