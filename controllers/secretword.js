const data = require('../data.json')

module.exports = {
  postWords : function (req, res) {
    let wordInput = req.body.word
    
    let checkWord = data.words.filter( word => {
      return word === wordInput
    })
    
    if (checkWord.length !== 0) {
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
