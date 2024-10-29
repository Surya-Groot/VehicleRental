const mongoose = require('mongoose');



const vechical = new mongoose.Schema({

    uniqId: String,
    orgId: String,
    featureId: Array,
    vType: String,
    brand: String,
    vModel: String,
    regNo: String,
    regType: String,
    seatCnt: String,
    ac: String,
    gear: String,
    fuel: String,
    toll: String,
    color: String,
    rangeKm: String,
    priceDay: String,
    fuelCap: String,
    mileage: String,
    engineCC: String,
    sunroof: String,
    gps: String,
    insId: String,
    insRenewalDay: Date,
    insExpDay: Date,
    lastService: Date,
    nextService: Date,
    holderName: String,
    holderMobile: String,
    holderEmail: String,
    airBag: String,
    accHis: String,
    vImg: Array,
    regDoc: String,
    insDoc: String,
    holderDL: String,
    holderProof: String,
    status: String,
    createAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('vechical', vechical)









