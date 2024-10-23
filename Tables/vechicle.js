const mongoose = require('mongoose');





const vechical = mongoose.Schema({

    uniqId: String,
    orgId: String,
    brand: String,
    regNo: String,
    vechicleType: String,

});

module.exports = mongoose.model('vechical', vechical)









