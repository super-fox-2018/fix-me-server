const data  = require('../data.json')
exports.postWords = function(res, req) {
  
  console.log("masuk");
  // let word = req.body.word;
  console.log(req.body); //undefined, tp req klo d cek ada body????
  // console.log(req);
  let checkWord = data.words.filter( word => {
    return word
  })

  if ( checkWords ) {
    console.log("masuk sini ga?")
    res.
      status( 200 )
      .json( true )
  } else {
    res
      .status( 400 )
      .json( false )
  }
}