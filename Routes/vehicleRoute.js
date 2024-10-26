
const express = require('express');
const route = express.Router();
const comControle = require('../Controles/commenControle');
const vechi = require('../Tables/vechicle')
const vehiCtrl = require('../Controles/vehicleControle');
const feature = require('../Tables/features');

route.post('/add/vehi',vehiCtrl.addVehilce);

route.get('/getsingle/:id', async (req, res) => { comControle.getItemById(req, res, vechi) });

route.put('/update/:id', async (req, res) => { comControle.updateItem(req, res, vechi) });

route.get('/getAll', async (req, res) => { comControle.getAllItems(req, res, vechi) }); 

route.post('/add/feature', async (req, res) => { await comControle.createItem(req, res, feature, 'FUT') })

module.exports = route;