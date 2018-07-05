const { data } = require('../data.json')

module.export = [
  postWords : function (res, req) {
    let word = req.body.word;
    let checkWord = data.words.filter( word => {
      return word = word
    })
    if ( checkWords ) {
      res.
        status( 200 )
        .json( true )
    } else {
      res
        .status( 400 );
        .json( false )
    }
  }

]