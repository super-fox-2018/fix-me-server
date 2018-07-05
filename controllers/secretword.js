
const { data } = require('../data.json')

module.exports = {
  postWords :function (res, req) {
    
    let word = req.body.word;
    let checkWords = data.words.filter( word => {
      return word = word
    })
    if ( checkWords ) {
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