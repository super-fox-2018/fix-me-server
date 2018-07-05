const data = require('../data.json')

module.exports = {
  postWords :function (req, res, next) {
    let word = req.body.word;
    let checkWord = data.words.filter( word => {

      return word = word
    })
    if (checkWord) {
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