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
    let hikeAndTime = chunk.toString().split('&');
    let hike = hikeAndTime[0].split('=')[1];
    let time = hikeAndTime[1].split('=')[1];
    database.save(hike, time, function(hikes) {
      res.send(hikes);
    });
  });
});

app.get('/reset', (req, res) => {
  database.reset();
  res.end('');
})

app.listen(process.env.PORT || 3000);