const router = require('express').Router();
const { postWord } = require('../controllers/secretwords')
/* GET users listing. */
router.get('/', function (req, res) {
  res.send('get kata kunci');
});
router.post('/', postWord);

module.exports = router