const express = require('express');
const route = express.Router();
const comCtrl = require('../Controles/commenControle');
const bookingCtrl = require('../Controles/bookigControle');
const book = require('../Tables/booking');


route.post('/add', async (req, res) => { await comCtrl.createItem(req, res, book, 'BOOK') });

route.get('/getSingle/:id', async (req, res) => { await comCtrl.getItemById(req, res, book) });

route.get('/getall', async (req, res) => { await comCtrl.getAllItems(req, res, book) })

route.put('/update/:id', async (req, res) => { await comCtrl.updateItem(req, res, book) });

route.get('/Bfilter', bookingCtrl.bookingFilter);

route.get('/Vfilter', bookingCtrl.vehiFillter);


module.exports = route;