var express = require('express');
var router = express.Router();
const { postWords } = require('../controllers/secretword');
/* GET users listing. */
router.get('/', postWords);



module.exports=router