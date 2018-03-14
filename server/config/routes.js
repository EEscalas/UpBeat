var upbeat = require('../controllers/upbeat.js');
let path = require('path');
module.exports = function(app) {
  app.get('/', upbeat.index);
  // app.post('/register', upbeat.register);
  // app.post('/login', upbeat.login);
  app.get('/parties', upbeat.getParties);
  app.post('/party/create', upbeat.createParty);
  app.get('/party/:partyid/delete', upbeat.deleteParty);
  app.get('/:partyid/songs', upbeat.getPartySongs);
  app.post('/songs/add', upbeat.addSong);
  app.get('/songs/delete/:partyid/:name/:artist', upbeat.deleteSong);
  app.get('/songs/upvote/:partyid/:name/:artist', upbeat.upvoteSong);
  app.get('/songs/downvote/:partyid/:name/:artist', upbeat.downvoteSong);
  app.get('/upvoteCheck', upbeat.getUpVoteCheck);
  app.post('/upvoteCheck', upbeat.saveUpVoteCheck);
  app.get('/downvoteCheck', upbeat.getDownVoteCheck);
  app.post('/downvoteCheck', upbeat.saveDownVoteCheck);
  // app.get('/:partyid/people', upbeat.getPartyPeople);
  app.all("*", (req,res,next) => {
    var ngName = "upbeat-front-end";
    res.sendFile(path.resolve("./"+ngName+"/dist/index.html"))
});
}
