const router = require('express').Router()

router.get('/', function(req, res, next) {
  res
    .status( 200 )
    .json( 'berhasil connect ke server' )
})

module.exports = router
