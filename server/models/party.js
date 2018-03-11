// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema
var PartySchema = new mongoose.Schema({
  id: {type: Number},
  name: {type: String},
  password: {type: String},
  accessKey:{type: String},
},{timestamp: true})

// register the schema as a model
var Party = mongoose.model('Party', PartySchema);