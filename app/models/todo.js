// grab the mongoose module
var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name : {type : String, default: ''},
  done : {type : Boolean, default: false},
});

module.exports = mongoose.model('Todo', TodoSchema, 'Todo');