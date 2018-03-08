import { Component, OnInit } from '@angular/core';
import {Song, SONGS} from '../song'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  partyName :string;
  partyid :number;
  //use partyid to get songs
  songs = SONGS;

  ngOnInit() {
    this.partyName = this.route.snapshot.paramMap.get('name');
  	this.partyid = +this.route.snapshot.paramMap.get('id');
  }
  onSelectUpVote(song:Song) :void {
  	song.upcount++;
  }
  onSelectDownVote(song:Song) :void {
  	song.upcount--;
  }

}
