import { Component, OnInit } from '@angular/core';
import {Song, SONGS} from '../song';
import {SongService} from '../song.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../api.service';
import { Party } from '../parties';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router, private songService: SongService, private apiService: ApiService) { }
  // Initialize variables
  partyName :string;
  partyid :number;
  songs : Song[] = [];
  isDj: boolean = false;
  url: string;
  tempSong: Song;
  accessKey: string;
  existingParties: Party[];
  uniqueSong: boolean;
  emptySong: boolean;
  checkUpVoted;
  checkDownVoted;

  // Initialize variables
  ngOnInit() {
    this.getVoteCheck();
    this.tempSong = new Song();
    this.uniqueSong = false;
    this.emptySong = false;
    this.getParties();
    this.url = this.router.url;
    if(this.url[1] == 'd')
        this.isDj = true;
    else
        this.isDj = false;
  }

  // Get checkVoted from session on server side
  getVoteCheck(){
    this.songService.getUpVoteCheck().then(result1 =>{
      this.checkUpVoted = result1;
      this.songService.getDownVoteCheck().then(result2 => {
        this.checkDownVoted = result2;
      })
    })
  }

  // Use apiService to get parties and initialize party information
  getParties(){
    this.apiService.getParties().then(result=> {
      this.existingParties = result;
      this.partyName = this.route.snapshot.paramMap.get('name');
      this.partyid = +this.route.snapshot.paramMap.get('id');

      for (let i = 0; i < this.existingParties.length; i++) // need to modify to use getParties from api.service.ts
      {
        if (this.existingParties[i].id == this.partyid && this.existingParties[i].name == this.partyName)
        {
          this.accessKey = this.existingParties[i].accessKey;
        }
      }

      this.getSongs(this.partyid);
    })
  }

  // Use songService to get songs for the party
  getSongs(partyid: number){
    this.songService.getSongs(partyid).then(result=>{
      this.songs = result;

      // Temp variable to keep track of songs in checkVoted that may have been deleted
      var temp1 = {};
      for(var key in this.checkUpVoted){
        temp1[key] = {};
        for(var key2 in this.checkUpVoted[key])
        {
          temp1[key][key2] = false;
        }
      }

      // Add any new songs to checkUpVoted and checkDownVoted. Mark songs in temp1.
      for(let i = 0; i < result.length; i++){
        if(this.checkUpVoted[result[i].artist] == undefined){
          this.checkUpVoted[result[i].artist] = {};
          this.checkUpVoted[result[i].artist][result[i].name] = false;
          this.checkDownVoted[result[i].artist] = {};
          this.checkDownVoted[result[i].artist][result[i].name] = false;
          temp1[result[i].artist] = {};
          temp1[result[i].artist][result[i].name] = true;
        }
        else if(this.checkUpVoted[result[i].artist][result[i].name] == undefined){
          this.checkUpVoted[result[i].artist][result[i].name] = false;
          this.checkDownVoted[result[i].artist][result[i].name] = false;
          temp1[result[i].artist][result[i].name] = true;
        }
        else{
          temp1[result[i].artist][result[i].name] = true;
        }
      }

      // Look for any unmarked songs in temp1 and delete keys from checkUpVoted
      for(var key in temp1){
        for(var key2 in temp1[key]){
          if(!temp1[key][key2])
          {
            delete this.checkUpVoted[key][key2];
            delete this.checkDownVoted[key][key2];
          }
        }
        if(Object.keys(this.checkUpVoted[key]).length == 0)
        {
          delete this.checkUpVoted[key];
          delete this.checkDownVoted[key];
        }
      }

      // Save checkUpVoted into session on server side
      this.songService.saveUpVoteCheck(this.checkUpVoted).then(result =>{
        // Sort songs by number of upcounts
        this.songService.saveUpVoteCheck(this.checkUpVoted).then(result2 => {
          this.songs.sort((obj1:Song, obj2:Song) => {
            if(obj1.upcount > obj2.upcount){
              return -1;
            }
            if(obj1.upcount < obj2.upcount){
              return 1;
            }
            return 0;
          })
        })
      })
    })
  }
  
  // Delete songs
  deleteParty(){
    this.apiService.deleteParty(this.partyid).then(result=>{
      if(result == true)
        this.router.navigateByUrl('/');
    });
  }

  // Use songService to add song to database
  onAddSong() :void {
    // Create song object
    this.tempSong = new Song();
    this.tempSong.artist = (<HTMLInputElement>document.getElementById("artist")).value;
    this.tempSong.name = (<HTMLInputElement>document.getElementById("song")).value;
    this.tempSong.partyid = this.partyid;

    // Make sure input isn't empty
    if(this.tempSong.name == "" || this.tempSong.artist == ""){
      this.emptySong = true;
    }
    else{
      this.emptySong = false;

      // Check for duplicate song
      var self = this;
      this.songService.getSongs(this.partyid).then(songs => {
        var flag = false;
        for(let i = 0; i < songs.length; i++){
          if(songs[i].name == this.tempSong.name && songs[i].artist == this.tempSong.artist){
            flag = true;
          }
        }
        
        if(flag){ // If song is a duplicate
          this.uniqueSong = true;
        }
        else{
          this.uniqueSong = false;
          // If not duplicate, add song
          self.songService.addSong(this.tempSong).then(result=>{
            // Update song list
            self.getSongs(self.partyid);

            // Reset model for songs
            self.tempSong = new Song();
          });
        }
      });
    }
   }

  //  Delete song from database
  onSelectDelete(song: Song): void {
    var self = this;
    this.songService.deleteSong(song).then(result=>{
      // Update song list
      self.getSongs(self.partyid);
    });
  }

  // Upvote
  onSelectUpVote(song:Song) :void {
    var self = this;
    this.checkUpVoted[song.artist][song.name] = true;
    this.songService.upvoteSong(song).then(result=>{
      // Update song list
      self.getSongs(self.partyid);
    });
  }

  // Downvote
  onSelectDownVote(song:Song) :void {
    var self = this;
    this.checkUpVoted[song.artist][song.name] = true;    
    this.songService.downvoteSong(song).then(result=>{
      // Update song list
      self.getSongs(self.partyid);
    });
  }

}