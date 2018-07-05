const data  = require('../data.json')

class Controller {
  static postWords(req,res){
    let words = req.body.words;
    // console.log(words)
    // console.log(words,'reqbody')
    let checkWord = data.words.filter( word => {
      // console.log(word,'didalam word')
      if (words == word) {
        return true
      }  
      // console.log(words)
    })
    if (checkWord.length==0) {
      checkWord = false
    }
    else{
      checkWord = true
    }
    console.log('checkword',checkWord)

    if ( checkWord==true ) {
      console.log('waduh patrick')
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

module.exports = Controller

// module.exports = [
//   postWords = function (req, res) {
//     let words = req.body.word;
//     let checkWord = data.words.filter( word => {
//       return words = word
//     })
//     if ( checkWord ) {
//       res.
//         status( 200 )
//         .json( true )
//     } else {
//       res
//         .status( 400 )
//         .json( false )
//     }
//   }

// ]
