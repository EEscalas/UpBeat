// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema
var UserSchema = new mongoose.Schema({
    id: {type: Number},
    name: {type: String},
    password: {type: String},
    isDJ: {type: Boolean}  
})

// register the schema as a model
var User = mongoose.model('User', UserSchema);

