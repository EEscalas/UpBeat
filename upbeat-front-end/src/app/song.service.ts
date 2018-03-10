import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Song, SONGS } from './song';

@Injectable()
export class SongService {

  constructor() { }

  getSongs(): Observable<Song[]> {
    return of(SONGS);
  }

}
