var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var util = require('util');


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var io = require('socket.io').listen(9000);

var pg = require ('pg');
//var con_string = 'tcp://asterisk:seblap1234@localhost/asterisk';
var con_string = 'tcp://asterisk:helloasterisk250@localhost/asterisk';


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
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);


//CRUD
app.post('/api/calls', (req, res, next) => {
  const results = [];
  // Grab data from http request
  // Get a Postgres client from the connection pool
  const otherJSON = JSON.stringify(req.body);
  console.log("OTHER JSON,", otherJSON)
  console.log("********")
  const parsedJSON = JSON.parse(otherJSON);
  console.log("PARSED JSON", parsedJSON);
  console.log("TYPE", typeof parsedJSON);
  pg.connect(con_string, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data
    console.log("ID IS !", parsedJSON.id)
    client.query('INSERT INTO calls values($1, $2)',
    [parsedJSON.id, otherJSON]);
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM calls ORDER BY id ASC');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

app.get('/api/calls', (req, res, next) => {
  const results = [];
  // Get a Postgres client from the connection pool
  pg.connect(con_string, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM calls ORDER BY id ASC;');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});






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
