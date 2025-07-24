const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    }
})

module.exports = mongoose.model('Task', taskSchema)