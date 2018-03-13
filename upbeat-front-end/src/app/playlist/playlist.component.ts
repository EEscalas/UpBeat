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
  partyName :string;
  partyid :number;
  //use partyid to get songs
  //songs = SONGS;
  songs : Song[] = [];
  isDj: boolean = false;
  url: string;
  tempArtist: string;
  tempSong: string;
  accessKey: string;
  existingParties: Party[] = this.apiService.getParties();

  ngOnInit() {

    this.partyName = this.route.snapshot.paramMap.get('name');
    this.partyid = +this.route.snapshot.paramMap.get('id');

    for (let i = 0; i < this.existingParties.length; i++) // need to modify to use getParties from api.service.ts
    {
      if (this.existingParties[i].id == this.partyid && this.existingParties[i].name == this.partyName)
      {
        this.accessKey = this.existingParties[i].accessKey;
      }
    }


    // this.songs = SONGS;

    this.songs = this.songService.getSongs(this.partyid);

    this.songs = this.songs.sort((obj1:Song, obj2:Song) => {
    if(obj1.upcount > obj2.upcount){
      return -1;
    }
    if(obj1.upcount < obj2.upcount){
      return 1;
    }
    return 0;
  });

    
    //this.songs.OrderBy(x=>x.upcount);
    this.url = this.router.url;
    if(this.url[1] == 'd')
        this.isDj = true;
    else
        this.isDj = false;
  }

  onAddSong() :void {
    this.tempArtist = (<HTMLInputElement>document.getElementById("artist")).value;
    this.tempSong = (<HTMLInputElement>document.getElementById("song")).value;
    
    // make sure song isn't a duplicate

    this.songs.push({ name: this.tempSong, artist: this.tempArtist, partyid: this.partyid, upcount:0 });
   }

  onSelectDelete(song: Song): void {
    for (let i = 0; i < this.songs.length; i++)
    {
      if (song.partyid == this.partyid && this.songs[i].name == song.name && this.songs[i].artist == song.artist)
      {
        this.songs.splice(i, 1);
        break;
      }
    }
  }

  onSelectUpVote(song:Song) :void {

    song.upcount++;
    this.songs.sort((obj1:Song, obj2:Song) => {
    if(obj1.upcount > obj2.upcount){
      return -1;
    }
    if(obj1.upcount < obj2.upcount){
      return 1;
    }
    return 0;
  });
  }
  onSelectDownVote(song:Song) :void {
  	song.upcount--;
    this.songs.sort((obj1:Song, obj2:Song) => {
    if(obj1.upcount > obj2.upcount){
      return -1;
    }
    if(obj1.upcount < obj2.upcount){
      return 1;
    }
    return 0;
  });
  }

//   sort((obj1:Song, obj2:Song) => {
//     if(obj1.upcount > obj2.upcount){
//       return 1;
//     }
//     if(obj1.upcount < obj2.upcount){
//       return -1;
//     }
//     return 0;
//   });
// }
}