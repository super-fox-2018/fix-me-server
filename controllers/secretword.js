const { data } = require('../data.json')

module.exports = {
  postWords :function (res, req) {
    
    let word = req.body.word;
    let checkWord = word.filter( word => {
      return word = word
    })
    if ( checkWord ) {
      res.
        status( 200 )
        .json( true )
    } else {
      res
        .status( 400 )
        .json( false )
    }
  }

}