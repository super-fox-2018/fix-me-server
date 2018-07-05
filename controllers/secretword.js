const data = require('../data.json')
module.exports = {
  postWord (req,res) {
    let word = req.body.word;
    console.log("ini word===========",word)
    let checkWord = data.words.filter( word => {
      return word = word
    })
    if (checkWord) {
      res.status( 200 ).json(true)
    } else {
      res.status( 400 ).json(false)
    }
  }

}