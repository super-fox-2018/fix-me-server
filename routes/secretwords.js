const router = require('express');
const { postWord } = require('./controllers/secretword');
/* GET users listing. */
router.get('/', postWord);

