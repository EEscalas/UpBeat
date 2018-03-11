var mongoose = require('mongoose');
var Party = mongoose.model('Party');
var User = mongoose.model('User');
var Song = mongoose.model('Song');
module.exports = {
  index: function(req, res) {
    res.render('index');
  },


  getParties: function(req, res){
      Party.find({}, function(err, parties){
        if(err)
          res.json('err');
        else
          res.json(parties);
      })
  },

  getPartyById: function(req, res){
      Party.findOne({id:req.params.partyid}, function(err, party){
        res.json(party);
      })
  },

  getPartySongs: function(req, res){
    Song.find({partyid: req.params.partyid}, function(err, songs){
      if(err)
        res.json('err');
      else
        res.json(songs);
    })
  },

  createParty: function(req, res){
      Party.find({}).sort('-createdAt').exec(function(err, parties){
        var id = 0;
        if(parties.length == 0)
          id = 1;
        else
          id = parties[0].id+1;

        req.body.id = id;

        console.log('req');
        console.log(req.body);
        newParty = new Party(req.body);
        console.log('new');
        console.log(newParty);
        newParty.save(function(err){
          if(err)
            res.json('err');
          else
            res.json(newParty);
        })
        
      })
  },

  deleteParty: function(req, res){
    Party.remove({id: req.params.partyid}, function(err){
        if(err)
          res.json(err);
        else{
          Song.remove({partyid: req.params.partyid}, function(err2){
            if(err2)
              res.json(err2);
            else
              res.json(true);
          })
        }
    })
  },

  addSong: function(req, res){
    newSong = Song(req.body);
    newSong.save(function(err){
      if(err)
        res.json(err);
      else
        res.json(true);
    })
  },

  deleteSong: function(req, res){
    Song.remove({partyid: req.params.partyid, name: req.params.name, artist: req.params.artist}, function(err){
      if(err)
        res.json(err);
      else{
        res.json(true);
      }
    })
  },

  upvoteSong: function(req, res){
    Song.findOne({partyid: req.params.partyid, name:req.params.name, artist: req.params.artist}, function(err, song){
      console.log(song);
      console.log(song.upcount);
      song.upcount = song.upcount+1;
      console.log(song.upcount);
      song.save(function(err){
        if(err)
          res.json(err);
        else{
          console.log(song);
          res.json(true);
        }
      })
    })
  },


  downvoteSong: function(req, res){
    Song.findOne({partyid: req.params.partyid, name:req.params.name, artist: req.params.artist}, function(err, song){
      song.upcount = song.upcount - 1;
      song.save(function(err){
        if(err)
          res.json(err);
        else
          res.json(true);
      })
    })
  },

  register: function(req, res){
    // TODO: Hash password using bcrypt
      var user = new User(req.body);
      user.save(function(err){
        if(err == null){
          req.session.currentUser = user;
          res.json(true);
        }
        else
          res.json(err);
      })
  },

  login: function(req, res){
      User.findOne({name: req.body.name}, function(err, user){
        // TODO: Use bcrypt for hashed password
        if(req.body.password != user.password)
          res.json(false);
        else{
          req.session.currentUser = user;
          res.json(true);
        }
      })
  }
}
