const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017');

var db = mongoose.connection;

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
  });
}

exports.retrieveHikes = (cb) => {
  Hike.find().exec(function(err, hikes) {
    cb(hikes);
  });
}

exports.reset = () => {
  Hike.remove({}).exec(function(err){
    if (err) {console.log(err);}
  });
}