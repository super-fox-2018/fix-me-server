const data = require('../data.json')

module.exports = {
  postWord : function (req, res) {
    let words = req.body.word
    let checkWord = data.words.filter( word => {
      return word = words
    })
    if ( checkWord ) {
      res
        .status( 200 )
        .json( true )
    } else {
      res
        .status( 400 )
        .json( false )
    }
  }

}