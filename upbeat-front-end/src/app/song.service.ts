import { Injectable } from '@angular/core';
import { Song,SONGS } from './song';


@Injectable()
export class SongService {
  songs: Song[] = [];

  constructor() { 
  	this.songs = SONGS;
  }

  getSongs(id:number): Song[] { 

  	var temp:Song[] = [];

  	for(var i=0;i<this.songs.length;i++) { 
  		if(id==SONGS[i].partyid)
  			temp.push(SONGS[i]);
  	}

  	return temp;
	}
}
