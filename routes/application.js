//This is the Application Layer Middleware, its basically applied Globaly on All application
const express = require('express')
const app = express()

const reqFilter = require('./middleware/middleware.js') //included Routes

const route = express.Router()
route.use(reqFilter)

app.listen(3000)

app.get('/', (req, res) =>{
    res.send('Welcome to Home Page')
})

app.get('/contact', (req, res) =>{
    res.send('Welcome to Contact Page')
})

// app.get('/contact', reqFilter, (req, res) =>{ //Single Routes
//     res.send('Welcome to Contact Page')
// })

route.get('/about',  (req, res) =>{
    res.send('Welcome to About Page')
})

app.use('/',route)