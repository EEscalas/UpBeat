import { Component, OnInit } from '@angular/core';
import {Song, SONGS} from '../song'
import {ActivatedRoute, Router} from '@angular/router'
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
  songs = SONGS;
  isDj: boolean = false;
  url: string;
  ngOnInit() {
    this.partyName = this.route.snapshot.paramMap.get('name');
  	this.partyid = +this.route.snapshot.paramMap.get('id');
    //this.songs.OrderBy(x=>x.upcount);
    this.url = this.router.url;
    if(this.url[1] == 'd')
        this.isDj = true;
    else
        this.isDj = false;
  }
  onSelectUpVote(song:Song) :void {
  	song.upcount++;
  }
  onSelectDownVote(song:Song) :void {
  	song.upcount--;
  }

}
