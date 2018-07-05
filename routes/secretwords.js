const router = require('express').Router()
const { postWord } = require('../controllers/secretword');
/* GET users listing. */
router.post('/', postWord);

module.exports = router
