const express = require('express');
const route = express.Router();
const orgCtrl = require('../Controles/orgControler');
const comCtrl = require('../Controles/commenControle');
const emp = require('../Tables/employe');

route.post('/addEmp', async (req, res) => { await orgCtrl.regOrg(req, res, emp, 'EMP') });

route.put('/update/:id',async(req,res)=>{await orgCtrl.updateOrg(req,res,emp)})

route.get('/getall',async (req,res)=>{await comCtrl.getAllItems(req,res,emp)});

route.get('/getSingle/:id',async(req,res)=>{await comCtrl.getItemById(req,res,emp)});


module.exports = route; 