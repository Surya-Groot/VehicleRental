

const mongoose = require('mongoose');

const organization = new mongoose.Schema({

    uniqId: { type: String },
    orgName: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    contory: { type: String },
    phoneNo: { type: String },
    anotherNo: { type: String },
    email: { type: String },
    password: { type: String },
    ownerName: { type: String },
    yearEstablish: { type: Date },
    noEmploye: { type: Number },
    noVehicle: { type: Number },
    licenseExprieDate: { type: Date },
    businessCert: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    createAt: { type: Date, default: Date.now() },
    logo: { type: String },
    otp: Number
});


module.exports = mongoose.model('organization', organization);