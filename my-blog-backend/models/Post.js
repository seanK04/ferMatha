const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: String,
    title: String,
    date: String,
    views: { type: Number, default: 0 },
});

module.exports = mongoose.model('Post', postSchema);