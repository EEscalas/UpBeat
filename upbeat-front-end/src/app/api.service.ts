import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { User } from './user';
import { Party } from './parties';
import { Song } from './song';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private _http:Http) { }

  registerUser(user: User){
    return this._http.post('/register', user).map(data => data.json()).toPromise();
  } 

  login(info){
    return this._http.post('/login', info).map(data=>data.json()).toPromise();
  }

  createParty(party: Party){
    return this._http.post('/party/create', party).map(data=>data.json()).toPromise();
  }

  getParties(){
    return this._http.get('/parties').map(data=>data.json()).toPromise();
  }

  getPartySongs(partyid: number){
    return this._http.get('/'+partyid+'/songs').map(data=>data.json()).toPromise();
  }

  deleteParty(partyid: number){
    return this._http.get('/party/'+partyid+'/delete').map(data=>data.json()).toPromise();
  }

}
