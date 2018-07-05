const express = require('express');
const path = require('path');
const logger = require('morgan');
const secretwords = require('./routes/secretwords')
const index = require('./routes/index');
// const bodyParser = require('body-parser');



// view engine setup
const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', index);
app.use('/katakunci', secretwords);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res
    .status(err.status || 500)
    .json( 'anda tersesat begitu dalam' )
});

module.exports = app;
