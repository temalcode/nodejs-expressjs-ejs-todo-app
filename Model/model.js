
const mongoose = require('mongoose')

const todo = mongoose.Schema({
    todo:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }
})

module.exports = mongoose.model('todos', todo)