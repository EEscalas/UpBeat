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
  }
  
  // Initialize parties list and dj status
  ngOnInit() {
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

    if(this.tempSong.name == "" || this.tempSong.artist == ""){
      this.emptySong = true;
    }
    else{
    // TODO: make sure song isn't a duplicate
      this.emptySong = false;
    
      var self = this;
      this.songService.getSongs(this.partyid).then(songs => {
        console.log("asdfasdfnlakjnfkan");
        var flag = false;
        for(let i = 0; i < songs.length; i++){
          console.log(i);
          console.log(songs[i].name);
          console.log(this.tempSong.name);
          if(songs[i].name == this.tempSong.name && songs[i].artist == this.tempSong.artist){
            flag = true;
          }
        }
        if(flag){
          this.uniqueSong = true;
        }
        else{
          this.uniqueSong = false;
          self.songService.addSong(this.tempSong).then(result=>{
            // Update song list
            self.getSongs(self.partyid);
            self.tempSong = new Song();
          });
        }
      });
    }

    // Send song to database
    // var self = this;
    // this.songService.addSong(this.tempSong).then(result=>{
    //   // Update song list
    //   self.getSongs(self.partyid);
    // });


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
    this.songService.upvoteSong(song).then(result=>{
      // Update song list
      self.getSongs(self.partyid);
    });
  }

  // Downvote
  onSelectDownVote(song:Song) :void {
    var self = this;
    this.songService.downvoteSong(song).then(result=>{
      // Update song list
      self.getSongs(self.partyid);
    });
  }

}