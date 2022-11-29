const express = require('express')
const app = express()

app.listen(3000)

app.get('/', (req, res) =>{
    res.send('Welcome to Home Page')
})

app.get('/about', (req, res) =>{
    res.send('Welcome to About Page')
})

app.get('/contact', (req, res) =>{
    res.send('Welcome to Contact Page')
})