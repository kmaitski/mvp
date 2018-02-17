const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017');

var db = mongoose.connection;

const hikeSchema = mongoose.Schema({
  hikeName: String,
  bestTime: Number,
  update: {type: Date, default: Date.now}
});

const Hike = mongoose.model('Hike', hikeSchema);

exports.save = (name, time, cb) => {
  Hike.find({'hikeName': name}).exec((err, hike) => {
    if (hike.length) {
      hike = hike.pop();
      hike.set({hikeName: name, bestTime: time, update: new Date}).save(() => {
        exports.retrieveHikes(hikes => {
          cb(hikes);
        });
      });
    } else {
      let newHike = new Hike({
        hikeName: name,
        bestTime: Number(time),
        update: new Date
      });
      newHike.save(function(err, hike) {
        exports.retrieveHikes( hikes => {
          cb(hikes);
        });
      });
    }
  })
}

exports.retrieveHikes = (cb) => {
  Hike.find().sort([['update', -1]]).exec(function(err, hikes) {
    cb(hikes);
  });
}

exports.reset = () => {
  Hike.remove({}).exec(function(err){
    if (err) {console.log(err);}
  });
}