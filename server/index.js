const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('../src/client'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
  res.end('');
});

app.post('/add', (req, res) => {
  req.on('data', function(chunk) {
    let hikeAndTime = chunk.toString().split('&');
    let hike = hikeAndTime[0].split('=')[1];
    let time = hikeAndTime[1].split('=')[1];
  })
  res.end('');
})

app.listen(process.env.PORT || 3000);