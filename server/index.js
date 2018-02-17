const express = require('express');
const app = express();
const path = require('path');
const database = require('../database/index.js');

app.use(express.static(__dirname + '/../src/client/public'));

app.get('/fetch', (req, res) =>{
  database.retrieveHikes(function(hikes) {
    res.send(hikes);
  });
});

app.post('/add', (req, res) => {
  req.on('data', function(chunk) {
    let hikeAndTimeAndLocation = chunk.toString().split('&');
    console.log(hikeAndTimeAndLocation);
    let hike = hikeAndTimeAndLocation[0].split('=')[1];
    let time = hikeAndTimeAndLocation[1].split('=')[1];
    let location = hikeAndTimeAndLocation[2].split('=')[1];
    database.save(hike, time, location, function(hikes) {
      res.send(hikes);
    });
  });
});

app.get('/reset', (req, res) => {
  database.reset();
  res.end('');
});

app.post('/delete', (req, res) => {
  req.on('data', function(chunk) {
    let hikeToDelete = chunk.toString();
    database.delete(hikeToDelete, function(hikes) {
      res.send(hikes);
    });
  });
});

app.listen(process.env.PORT || 3000);