const express = require('express')
const mongoose = require('mongoose')
const app = express()
const methodOverride = require('method-override')
const path = require('path')
const ejsMate = require('ejs-mate')

mongoose
  .connect('mongodb://localhost:27017/toDoList', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MONGO Connection Open')
  })
  .catch((err) => {
    console.log('ERROR!!!!!')
    console.log(err)
  })

app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, '/public')))

// HOME PAGE

app.get('/home', (req, res) => {
  res.render('home')
})
app.get('/shop', (req, res) => {
  res.send('shop')
})
app.get('/story', (req, res) => {
  res.send('story')
})
app.get('/contact', (req, res) => {
  res.send('contact')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
