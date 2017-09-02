'use strict'

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/to-do');

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