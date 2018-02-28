var mongoose = require('mongoose');
var Party = mongoose.model('Party');
module.exports = {
  index: function(req, res) {
    res.render('index');
  },

  getParties: function(req, res){
      Product.find(function(err, parties){
          res.json(parties);
      })
  },

}
