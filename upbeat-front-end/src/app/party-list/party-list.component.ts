import { Component, OnInit } from '@angular/core';
 import { Party} from '../parties';
//import { Party } from '../parties';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {

  constructor(private apiService:ApiService ,private router: Router) {}

   parties: Party[] = [];


  onSelectParty(name:string, id:number) : void {
    this.router.navigateByUrl('/guest/' + name + '/' + id + '/password');
  }

  ngOnInit() {
    this.parties = this.apiService.getParties();
    console.log(this.parties);
  }

}
