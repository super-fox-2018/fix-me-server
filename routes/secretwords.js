const express = require('express');
const router = express.Router()
const Controller = require('../controllers/secretword');


/* GET users listing. */
router.post('/', Controller.postWords);
// console.log('controler masuk gak')

module.exports = router

