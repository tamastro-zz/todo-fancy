'use strict'

var mongoose = require('mongoose')

var listSchema = mongoose.Schema({
    title: String,
    created_at: Date,
    status: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

var listModel = mongoose.model('list', listSchema);


module.exports = {
    listModel
}