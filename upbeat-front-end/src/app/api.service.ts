import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { User } from './user';
import { Song } from './song';
import {Party} from './parties';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


// export class Party {
//     constructor(
//         public id: number = null,
//         public name: string = ""//,
//         //public password: string = ""
//     ){}
// }



@Injectable()
export class ApiService {

  parties: Party[] = [];
  maxPartyId:number = 0;


  constructor(private _http:Http) { }




    fetchParties(): void {;}  //This will be used to get parties from the server

    getParties(): Party[] { return this.parties; }


    createParty(name: string, password: string): Party
    {
      for(var i=0;i<this.parties.length;i++) {
          if(this.parties[i].name == name)
             return null;
      }

      this.maxPartyId++;
      var temp: Party = new Party();
      temp.name = name;
      temp.id = this.maxPartyId; 
      temp.password = password;
      this.parties.push(temp);
      return temp; 
    }


    deleteParty(name:string): void {

      for(var i=0;i<this.parties.length;i++) { 

          if(this.parties[i].name = name) {
            this.parties.splice(i,1);
          }
      }

    }



  // registerUser(user: User){
  //   return this._http.post('/register', user).map(data => data.json()).toPromise();
  // } 

  // login(info){
  //   return this._http.post('/login', info).map(data=>data.json()).toPromise();
  // }

  // createParty(party: Party){
  //   return this._http.post('/party/create', party).map(data=>data.json()).toPromise();
  // }

  // getParties(){
  //   return this._http.get('/parties').map(data=>data.json()).toPromise();
  // }

  // getPartySongs(partyid: number){
  //   return this._http.get('/'+partyid+'/songs').map(data=>data.json()).toPromise();
  // }

  // deleteParty(partyid: number){
  //   return this._http.get('/party/'+partyid+'/delete').map(data=>data.json()).toPromise();
  // }
}
