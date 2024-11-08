
const express = require('express');
const route = express.Router();
const comControle = require('../Controles/commenControle');
const drive = require('../Tables/drivers');
const lang = require('../Tables/refLanguage');
const dlc = require('../Tables/dlCatgory');


route.post('/add', async (req, res) => { await comControle.createItem(req, res, drive, 'DRI') });

route.get('/getAll', async (req, res) => { await comControle.getAllItems(req, res, drive) });

route.put('/update/:id', async (req, res) => { await comControle.updateItem(req, res, drive) });

route.post('/addLanguage', async (req, res) => { await comControle.createItem(req, res, lang, 'LAN') });

route.get('/getAllLang', async (req, res) => { await comControle.getAllItems(req, res, lang) });

route.post('/add/DLC', async (req, res) => { await comControle.createItem(req, res, dlc, 'DLC') });

route.get('/getall/DLC', async (req, res) => { await comControle.getAllItems(req, res, dlc) });



module.exports = route;