'use strict';

/*
 * nodejs-express-mongoose
 * Copyright(c) 2015 Madhusudhan Srinivasa <madhums8@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies
 */

require('dotenv').config();

const fs = require('fs');
const join = require('path').join;
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config');

const models = join(__dirname, 'app/models');
const port = process.env.PORT || 3000;

const app = express();
const connection = connect();

var io = require('socket.io').listen(9000);

var pg = require ('pg');
var con_string = 'tcp://asterisk:seblap1234@localhost/asterisk';
//var con_string = 'tcp://asterisk:helloasterisk250@localhost/asterisk';


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

//crud
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

//GET ALL
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
    const query = client.query('SELECT * FROM calls ORDER BY id DESC;');
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


//UPDATE
app.put('/api/calls/:call_id', (req, res, next) => {
  const results = [];
  // Grab data from the URL parameters
  const id = req.params.todo_id;
  // Grab data from http request

  const otherJSON = JSON.stringify(req.body);
  const parsedJSON = JSON.parse(otherJSON);
  // Get a Postgres client from the connection pool
  pg.connect(con_string, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    client.query('UPDATE calls SET data=($2) WHERE id=($1)',
    [parsedJSON.id, otherJSON]);
    // SQL Query > Select Data
    const query = client.query("SELECT * FROM calls ORDER BY id ASC");
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', function() {
      done();
      return res.json(results);
    });
  });
});

//DELETE
app.delete('/api/calls/:call_id', (req, res, next) => {
  const results = [];
  // Grab data from the URL parameters
  const id = req.params.call_id;
  // Get a Postgres client from the connection pool
  pg.connect(con_string, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Delete Data
    client.query('DELETE FROM calls WHERE id=($1)', [id]);
    // SQL Query > Select Data
    var query = client.query('SELECT * FROM calls ORDER BY id ASC');
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




/**

 * Expose
 */

module.exports = {
  app,
  connection
};

// Bootstrap models
fs.readdirSync(models)
  .filter(file => ~file.indexOf('.js'))
  .forEach(file => require(join(models, file)));

// Bootstrap routes
require('./config/passport')(passport);
require('./config/express')(app, passport);
require('./config/routes')(app, passport);

connection
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen () {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log('Express app started on port ' + port);
}

function connect () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  var connection = mongoose.connect(config.db, options).connection;
  return connection;
}
