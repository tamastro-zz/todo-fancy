'use strict'

var mongoose = require('mongoose')

var tagSchema = mongoose.Schema({
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
  title: String,
  created_at: Date,
  todos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'list'
  }]
})

var tagModel = mongoose.model('tag', tagSchema);


module.exports = {
  tagModel
}