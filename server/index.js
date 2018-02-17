const express = require('express');
const app = express();
const path = require('path');
const database = require('../database/index.js');
;
app.use(express.static(__dirname + '/../src/client/public'));

// app.get('/', (req, res) => {
//   // console.log(path.join(__dirname + '/index.html'))
//   // res.sendFile('index.html', {root: '../'});
//   // res.write(index.html);
//   // app.use('/', express.static(__dirname + '/'));
//   // res.sendFile(__dirname + '/index.html', {'root': '../'});
//   res.end('');
// });

app.post('/add', (req, res) => {
  req.on('data', function(chunk) {
    let hikeAndTime = chunk.toString().split('&');
    let hike = hikeAndTime[0].split('=')[1];
    let time = hikeAndTime[1].split('=')[1];
    database.save(hike, time, function(hikes) {
      res.send(hikes);
    });
  })
  // res.end('');
})

app.listen(process.env.PORT || 3000);