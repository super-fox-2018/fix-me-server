const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const index = require('./routes/index');
const secretwords = require('./routes/secretwords');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: false
}))

// view engine setup

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

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
  // console.log(req.body,'ini kali ya body')
  // render the error page]
  console.log(err.message)
  res
    .status(err.status || 500)
    .json( 'anda tersesat begitu dalam' )
});

module.exports = app;
