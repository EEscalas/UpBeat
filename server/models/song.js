// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema
var SongSchema = new mongoose.Schema({
  name: {type: String},
  artist: {type: String},
  partyid: {type: Number},
  upcount: {type: Number}
},{timestamp: true})

// register the schema as a model
var Song = mongoose.model('Song', SongSchema);