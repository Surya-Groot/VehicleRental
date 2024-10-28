
const express = require('express');
const route =express.Router();
const comControle = require('../Controles/commenControle');
const drive = require('../Tables/drivers');


route.post('/add',async(req,res)=>{await comControle.createItem(req,res,) })


module.exports = route;