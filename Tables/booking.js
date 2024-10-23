const mongoose = require('mongoose');

const booking = mongoose.Schema({

    uniqId: String,
    vehicleId: String,
    userId: String,
    startDate: Date,
    endDate: Date,
    bookigDate: { type: Date, default: Date.now() }

})

module.exports = mongoose.model('booking', booking)