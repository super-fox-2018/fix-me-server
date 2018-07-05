const { words } = require('../data.json')

module.exports = {
  postWords: (req,res) => {
    let word = req.body.word;
    let checkWord = words.filter(x => x === word)
    if (checkWord.length !== 0) {
      res.
        status(200)
        .json(true)
    } else {
      res
        .status(400)
        .json(false)
    }
  }
}