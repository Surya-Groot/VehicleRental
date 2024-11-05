const mongoose = require('mongoose');


const employee =new mongoose.Schema({
    uniqId: String,
    orgId: String,
    name: String,
    phone: String,
    email: String,
    address: String,
    img: String,
    empType: String,
    shift: String,
    status: String,
    createAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('employee', employee);  