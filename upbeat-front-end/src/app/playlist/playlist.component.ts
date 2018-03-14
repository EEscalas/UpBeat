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
  checkVoted;

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
    this.songService.getVoteCheck().then(result =>{
      this.checkVoted = result;
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
      var temp = {};
      for(var key in this.checkVoted){
        temp[key] = {};
        for(var key2 in this.checkVoted[key])
        {
          temp[key][key2] = false;
        }
      }

      // Add any new songs to checkVoted. Mark songs in temp.
      for(let i = 0; i < result.length; i++){
        if(this.checkVoted[result[i].artist] == undefined){
          this.checkVoted[result[i].artist] = {};
          this.checkVoted[result[i].artist][result[i].name] = false;
          temp[result[i].artist] = {};
          temp[result[i].artist][result[i].name] = true;
        }
        else if(this.checkVoted[result[i].artist][result[i].name] == undefined){
          this.checkVoted[result[i].artist][result[i].name] = false;
          temp[result[i].artist][result[i].name] = true;
        }
        else
          temp[result[i].artist][result[i].name] = true;
      }

      // Look for any unmarked songs in temp and delete keys from checkVoted
      for(var key in temp){
        for(var key2 in temp[key]){
          if(!temp[key][key2])
          {
            delete this.checkVoted[key][key2];
          }
        }
        if(Object.keys(this.checkVoted[key]).length == 0)
        {
          delete this.checkVoted[key];
        }
      }

      // Save checkVoted into session on server side
      this.songService.saveVoteCheck(this.checkVoted).then(result =>{
        // Sort songs by number of upcounts
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
    this.checkVoted[song.artist][song.name] = true;
    this.songService.upvoteSong(song).then(result=>{
      // Update song list
      self.getSongs(self.partyid);
    });
  }

  // Downvote
  onSelectDownVote(song:Song) :void {
    var self = this;
    this.checkVoted[song.artist][song.name] = true;    
    this.songService.downvoteSong(song).then(result=>{
      // Update song list
      self.getSongs(self.partyid);
    });
  }

}