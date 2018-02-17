const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var db = mongoose.connection;

// db.once('open', function() {
//   console.log(connected);
// });

const hikeSchema = mongoose.Schema({
  hikeName: String,
  bestTime: Number
});

const Hike = mongoose.model('Hike', hikeSchema);

exports.save = (hike, time, cb) => {
  let newHike = new Hike({hikeName: hike, bestTime: Number(time)});
  newHike.save(function(err, hike) {
    Hike.find(function(err, hikes) {
      cb(hikes);
    });
    // console.log(hike);
  })
}

exports.retrieveHikes = (cb) => {
  Hike.find().exec(function(err, hikes) {
    cb(hikes);
  });
}



// var test = new Hike({hikeName: 'Devil Gorge', bestTime: 55});

// test.save(function() {
//   console.log('saved');
// });

// Hike.find((err, hikes) => {
//   console.log(hikes)
// });