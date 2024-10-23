
const express = require('express');
const route = express.Router();
const comCtrl = require('../Controles/commenControle');
const orgCtrl = require('../Controles/orgControler');
const user = require('../Tables/user');

route.post('/reg',async(req,res)=>{await orgCtrl.regOrg(req,res,user,'USR')});

route.post('/login',async(req,res)=>{await orgCtrl.login(req,res,user)});

route.post('/forgetPass',async (req,res)=>{await orgCtrl.forgotPass(req,res,user)});

route.put('/update/:id',async (req,res)=>{await orgCtrl.updateOrg(req,res,user)});



module.exports =route