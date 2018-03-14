import { Component, OnInit } from '@angular/core';
import { Party } from '../parties';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }

  parties;

  getParties(){
    this.apiService.getParties().then(result=> {
      this.parties = result;
    })
  }
  onSelectParty(name, id) : void {
    this.router.navigateByUrl('/guest/' + name + '/' + id + '/password');
  }

  ngOnInit() {
    this.getParties();
  }

}
