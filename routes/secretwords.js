var express = require('express');
var router = express.Router();
const  secretword = require('../controllers/secretword');
/* GET users listing. */
router.post('/', secretword.postWords);

module.exports = router;