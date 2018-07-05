const { words } = require("../data.json");

module.exports = {
  postWord: function(req, res) {
    let word = req.body.word;
    console.log(word);
    let checkWords = words.indexOf(word)
    if (checkWords >= 0) {
      res.status(200).send(true);
    } else {
      res.status(400).send(false);
    }
  }
};
