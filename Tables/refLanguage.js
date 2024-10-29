

const mongoose = require('mongoose');

const languages = new mongoose.Schema({

    uniqId: String,
    lang: String,
    status: { type: Boolean, default: true },
})

module.exports = mongoose.model('language', languages);