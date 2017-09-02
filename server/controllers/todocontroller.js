const todos = require('../models/todo');
const tag = require('../models/tag');
const jwt = require('jsonwebtoken');
require('dotenv').config()



exports.listtodo = (req, res, next) => {
  var token = req.headers.token
  var decode = jwt.verify(token, process.env.SECRET)
  todos.listModel.find({
      user: decode.id
    })
    .populate('user')
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
}

exports.addtag = (req, res, next) => {
  var token = req.headers.token
  var decode = jwt.verify(token, process.env.SECRET)
  tag.tagModel.create({
    title: req.body.title,
    created_at: new Date(),
    user: decode.id
  })
    .then(data => {
      res.send({
        'data': data,
        'message': 'data masuk'
      })
    })
    .catch(err => {
      res.send(err)
    })
}

exports.addtodo = (req, res, next) => {
  var token = req.headers.token
  var decode = jwt.verify(token, process.env.SECRET)
  todos.listModel.create({
      title: req.body.title,
      created_at: new Date(),
      status: false,
      user: decode.id
    })
    .then(data => {
      res.send({
        'data': data,
        'message': 'data masuk'
      })
    })
    .catch(err => {
      res.send(err)
    })
}

exports.updatetag = (req, res, next) => {
  tag.tagModel.updateOne({
    _id: req.body.id
  }, {
      title: req.body.title
    })
    .then(data => {
      res.send({
        'data': data,
        'message': 'data updated'
      })
    })
}

exports.updatetodo = (req, res, next) => {
  todos.listModel.updateOne({
      _id: req.body.id
    }, {
      title: req.body.title
    })
    .then(data => {
      res.send({
        'data': data,
        'message': 'data updated'
      })
    })
}

exports.deletetag = (req, res) => {
  tag.tagModel.deleteOne({
    _id: req.params.id
  })
    .then(data => {
      res.send({
        'data': data,
        'message': 'data updated'
      })
    })
}

exports.deletetodo = (req, res) => {
  todos.listModel.deleteOne({
      _id: req.params.id
    })
    .then(data => {
      res.send({
        'data': data,
        'message': 'data updated'
      })
    })
}