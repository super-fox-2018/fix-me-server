const { words } = require('../data.json')

module.exports = {
  postWords : function (req, res) {
    let { word } = req.body;
    let checkWord = words.filter( wordInside => {
      return wordInside === word
    })

    if ( checkWord.length > 0 ) {
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