const data = require('../data.json')

module.exports = {
  postWords : function (req, res) {
    console.log('siniiiiiiiii')
    let wordo = req.body.word
    console.log('word ====', wordo)
    let checkWord = data.words.filter( word => {
       if(word == wordo){
         return true
       }else{
         return false
       }
    })
    if (checkWord.length > 0) {
      res.status( 200 ).json( true )
    } else {
      res.status( 400 ).json( false )
    }
  }
}
