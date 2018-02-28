// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema
var PartySchema = new mongoose.Schema({
  id: {type: Integer},
  name: {type: String},
  owner: {type: String},
  password: {type: String},
  songs: [],
},{timestamp: true})
// register the schema as a model

var Party = mongoose.model('Party', PartySchema);