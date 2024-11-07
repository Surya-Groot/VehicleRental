
const express = require('express');
const route = express.Router();
const comControle = require('../Controles/commenControle');
const bookigControle = require('../Controles/bookigControle');
const vechi = require('../Tables/vechicle')
const feature = require('../Tables/features');

route.post('/add', async (req, res) => { await comControle.createItem(req, res, vechi,'VHI') });

route.get('/getsingle/:id', async (req, res) => { await comControle.getItemById(req, res, vechi) });

route.get('/getAll', async (req, res) => { await comControle.getAllItems(req, res, vechi) });

route.put('/update/:id', async (req, res) => { await comControle.updateItem(req, res, vechi) });

route.delete('/delete/:id',async(req,res)=>{await comControle.deleteItem(req,res,vechi)});

route.post('/add/feature', async (req, res) => { await comControle.createItem(req, res, feature, 'FUT') });

route.get('/getall/feature/:vehicle', async (req, res) => { await bookigControle.isBike(req, res) });

module.exports = route;