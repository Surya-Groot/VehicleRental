
const mongoose = require('mongoose');

const user = new mongoose.Schema({

    uniqId: String,
    orgId: String,
    name: String,
    email: String,
    password: String,
    mobile: String,
    altNo: String,
    DOB: Date,
    gender: String,
    address: String,
    proofs: Array,
    logo: String,
    otp: Number

});

module.exports = mongoose.model('user', user)