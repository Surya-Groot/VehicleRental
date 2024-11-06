
const mongoose = require('mongoose');


const drivers = new mongoose.Schema({

    uniqId: String,
    orgId: String,
    dName: String,
    dGender: String,
    DOB: Date,
    batchNo: String,
    expe: String,
    dType: String,
    email: String,
    mobileNo: String,
    altMobNo: String,
    shift: String,
    DLno: String,
    DLcategory: String,
    DLexpire: Date,
    insNo: String,
    add: String,
    crimeRec: String,
    drivHis: String,
    accHis: String,
    salary: String,
    mediCert: String,
    pcc: String,
    dImg: String,
    dlImd: String,
    adhar: String,
    langKow: Array,
    status: { type: String, default: "Available" },
    createAt: { type: Date, default: Date.now() },

})

module.exports = mongoose.model('driver', drivers);