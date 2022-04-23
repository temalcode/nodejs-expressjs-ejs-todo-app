
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }))
app.set('view engine', 'ejs')
const dotenv = require('dotenv')
dotenv.config()
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGOBD_URL, () => console.log('connnected to the database'))
const model  = require('./Model/model.js')

app.get('/', async function(req, res){
    const allTodos = await model.find()
    res.render('index', {allTodos})
})

const todos = require('./Routes/todos.js')
app.use('/', todos)

app.listen(process.env.PORT || 5000, () => console.log('server is running') )
