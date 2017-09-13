'use strict'

var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    username: String,
    fullname: String,
    email: String,
    password: String,
    salt: String
})

var userModel = mongoose.model('user', userSchema);


module.exports = {
    userModel
}