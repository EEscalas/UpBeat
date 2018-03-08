import { Component, OnInit } from '@angular/core';
import { Song, SONGS } from '../song'
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-dj-playlist',
  templateUrl: './dj-playlist.component.html',
  styleUrls: ['./dj-playlist.component.css']
})
export class DjPlaylistComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }
  songs = SONGS;

  partyName :string;
  ngOnInit() {
  	this.partyName = this.route.snapshot.paramMap.get('name');
  }
  onSelectDelete(song:Song):void{
  	//do we want to do an alert box?
  	//delete song
  }

  onSelectUpVote(song:Song) :void {
  	song.upcount++;
  }
  onSelectDownVote(song:Song) :void {
  	song.upcount--;
  }
  onSelectDeleteParty():void{
  	//do we want an alert box?
  	//delete party
  	this.router.navigateByUrl('/dj');
  }

}
