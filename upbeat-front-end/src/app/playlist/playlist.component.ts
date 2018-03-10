import { Component, OnInit } from '@angular/core';
import {Song, SONGS} from '../song';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }
  partyName :string;
  partyid :number;
  //use partyid to get songs
  //songs = SONGS;
  songs : Song[] = [];
  isDj: boolean = false;
  url: string;
  tempArtist: string;
  tempSong: string;

  ngOnInit() {

    this.partyName = this.route.snapshot.paramMap.get('name');
    this.partyid = +this.route.snapshot.paramMap.get('id');


    // this.songs = SONGS;

    for(var i=0;i<SONGS.length;i++)
    {
       if(SONGS[i].partyid == this.partyid)
         this.songs.push(SONGS[i]);
    }

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