'use strict'

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/to-do');

var tagSchema = mongoose.Schema({
  title: String,
  created_at: Date,
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }]
})

var tagModel = mongoose.model('tag', tagSchema);


module.exports = {
  tagModel
}