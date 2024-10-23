
const express = require('express');
const route = express.Router();
const comControle = require('../Controles/commenControle');
const vechi = require('../Tables/vechicle')

route.post('/add', async (req, res) => { comControle.createItem(req, res, vechi, 'VHI') });

route.get('/getsingle/:id', async (req, res) => { comControle.getItemById(req, res, vechi) });

route.put('/update/:id', async (req, res) => { comControle.updateItem(req, res, vechi) });

route.get('/getAll', async (req, res) => { comControle.getAllItems(req, res, vechi) }); 

module.exports = route;