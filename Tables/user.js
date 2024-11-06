
const mongoose = require('mongoose');

const user = new mongoose.Schema({

    uniqId: String,
    orgId: String,
    name: String,
    email: String,
    password: String,
    phoneNo: String,
    altNo: String,
    DOB: Date,
    gender: String,
    address: String,
    proof: String,
    pImg: String,
    DL: String,
    otp: Number,
    createAt: { type: Date, default: Date.now() },
    status: { type: String, default: Active },

});

module.exports = mongoose.model('user', user)