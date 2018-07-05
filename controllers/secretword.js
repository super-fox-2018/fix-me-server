const data = require('../data.json')

module.exports = {
  postWords : function (req, res) {
    let word = req.body.word
    let checkWord = data.words.filter( wordEl => {
      return wordEl == word
    })
    console.log('----check word', checkWord);
    if ( checkWord[0] ) {
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