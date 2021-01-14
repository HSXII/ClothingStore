const mongoose = require('mongoose')
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

const seedProduct = [
  {
    name: 'Product3',
    item: 'Pants',
    price: '10',
    color: 'Black',
    size: 'S'
  },
  {
    name: 'Product4',
    item: 'Pants',
    price: '40',
    color: 'Black',
    size: 'S'
  },
  {
    name: 'Product5',
    item: 'Jacket',
    price: '25',
    color: 'Black',
    size: 'S'
  },
  {
    name: 'Product6',
    item: 'Jacket',
    price: '70',
    color: 'Black',
    size: 'S'
  }
]

// Product.insertMany(seedProduct)
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((e) => {
//     console.log(e)
//   })
