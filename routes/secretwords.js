const router = require('express').Router();
const  {postWords}  = require('../controllers/secretword.js');
/* GET users lsisting. */
router.post('/', postWords);



module.exports = router