const router = require('express').Router()
const { postWords } = require('../controllers/secretword');
/* GET users listing. */
router.post('/', postWords)
// router.get('/', function (req, res){
//   console.log('masuk sini')
// })

module.exports = router
