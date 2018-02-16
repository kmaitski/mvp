const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

var db = mongoose.connection;

// db.once('open', function() {
//   console.log(connected);
// });

const hikeSchema = mongoose.Schema({
  hikeName: String,
  bestTime: Number
});

const Hike = mongoose.model('Hike', hikeSchema);

var test = new Hike({hikeName: 'Devil Gorge', bestTime: 55});

test.save(function() {
  console.log('saved');
});

Hike.find((err, hikes) => {
  console.log(hikes)
});