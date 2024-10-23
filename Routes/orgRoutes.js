const express = require('express');
const route = express.Router();
const orgControle = require('../Controles/orgControler');
const comControle = require('../Controles/commenControle');

const tab = require('../Tables/organization')

route.post('/reg', async (req, res) => { await orgControle.regOrg(req, res, tab, 'ORG') });

route.post('/login', async (req, res) => { await orgControle.login(req, res, tab) });

route.post('/forgetPass', async (req, res) => { await orgControle.forgotPass(req, res, tab) });

route.post('/otpVerify/:id', async (req, res) => { await orgControle.otpVerfy(req, res, tab) });

route.put('/resetPass/:id', async (req, res) => { await orgControle.resetPass(req, res, tab) });

route.put('/update/:id', async (req, res) => { await orgControle.updateOrg(req, res, tab) });

route.put('/logo/:id', async (req, res) => { await orgControle.logo(req, res, tab,'logo') });

route.get('/getall', async (req, res) => { await comControle.getAllItems(req, res, tab) });

route.get('/getSingle', async (req, res) => { await comControle.getItemById(req, res, tab) });


module.exports = route;