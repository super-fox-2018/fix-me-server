const data = require('../data.json')

module.exports = {
  postWords (req, res, next) {
    let body = req.body.word

    let checkWord = data.words.filter( word => {
      return word == body
    })

    if (checkWord.length != 0) {
      res.status(200).json(true)
    } else {
      res.status(400).json(false)
    }

  }

}
