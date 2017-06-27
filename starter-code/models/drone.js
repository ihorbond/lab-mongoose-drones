const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myDrone = new Schema ({
  droneName: {type: String},
  propellers: {type: Number},
  maxSpeed: {type: Number}
});

const DroneModel = mongoose.model('Drone', myDrone);

module.exports = DroneModel;
