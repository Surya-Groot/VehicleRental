const mongoose = require('mongoose');


const features = new mongoose.Schema({
    uniqId: String,
    name: String,
    isbike: { type: Boolean, default: false },  
    status: { type: Boolean, default: true }
})


module.exports = mongoose.model('feature', features)