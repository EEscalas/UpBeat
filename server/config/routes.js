var upbeat = require('../controllers/upbeat.js');
let path = require('path');
module.exports = function(app) {
  app.get('/', upbeat.index);
  app.all("*", (req,res,next) => {
    var ngName = "";
    res.sendFile(path.resolve("./"+ngName+"/dist/index.html"))
});
}
