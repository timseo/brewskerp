var mongoose = require('mongoose')

//create bean schema
var beanSchema = new mongoose.Schema({
  name: String,
  quantity: Number
})

//sets variable for model
var Bean = mongoose.model('Bean', beanSchema)

//exports module
module.exports = Bean
