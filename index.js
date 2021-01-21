const express = require('express')
const mongoose = require('mongoose')
const app = express()
const methodOverride = require('method-override')
const path = require('path')
const ejsMate = require('ejs-mate')
const Product = require('./models/product')

mongoose
  .connect('mongodb://localhost:27017/clothingStore', {
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
app.get('/shop', async (req, res) => {
  const { item } = req.query
  if (item) {
    const products = await Product.find({ item })
    res.render('shop', { products })
  } else {
    const products = await Product.find({})
    res.render('shop', { products })
  }
})
app.get('/story', (req, res) => {
  res.render('story')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
