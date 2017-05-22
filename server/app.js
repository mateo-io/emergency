var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var io = require('socket.io').listen(9000);

var pg = require ('pg');
var con_string = 'tcp://asterisk:helloworld250@localhost/asterisk';


var pg_client = new pg.Client(con_string);
pg_client.connect();
var query = pg_client.query('LISTEN addedrecord');



io.sockets.on('connection', function (socket) {
    socket.emit('connected', { connected: true });
    socket.on('ready for data', function(){console.log("ready for data")});

  pg_client.on('notification', function(data) {
    console.log("Insert notification")
    console.log("Data is ", data)
    socket.emit('insert', data);
  });


})

var newCall = function(io) {
  return function(req, res){
  console.log("GET /newcall");

    io.sockets.emit("update", {message: "HELLO"});
    console.log("I emitted update")
    res.status(200).json({message: "Message sent!"});    
  }
};
app.get('/addcall', newCall(io));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
