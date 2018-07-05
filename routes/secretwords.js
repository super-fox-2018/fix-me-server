const express = require('express')
const router = express.Router()
const secretwordController = require('../controllers/secretword');
/* GET users listing. */
router.get('/', (req,res)=>{
    res.send('OK')
})
router.post('/',secretwordController.postWords);

module.exports = router

