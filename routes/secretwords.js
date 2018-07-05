const router = require('express').Router();

const { postWords } = require('../controllers/secretword');
/* POST users listing. */
router.post('/', postWords);

module.exports = router;