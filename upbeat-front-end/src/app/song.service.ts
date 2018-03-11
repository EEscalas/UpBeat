import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Song, SONGS } from './song';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SongService {
//   songs: Song[] = [];

  constructor(private _http:Http) { 
  }

  getSongs(partyid: number){
    return this._http.get('/'+partyid+'/songs').map(data=>data.json()).toPromise();
  }

  addSong(song: Song){
	  return this._http.post('/songs/add', song).map(data=>data.json()).toPromise();
  }

  deleteSong(song: Song){
    return this._http.get('songs/delete/'+song.partyid+'/'+song.name+'/'+song.artist).map(data=>data.json()).toPromise();
  }

  upvoteSong(song: Song){
    return this._http.get('songs/upvote/'+song.partyid+'/'+song.name+'/'+song.artist).map(data=>data.json()).toPromise();
  }

  downvoteSong(song: Song){
    return this._http.get('songs/downvote/'+song.partyid+'/'+song.name+'/'+song.artist).map(data=>data.json()).toPromise();
  }
}
