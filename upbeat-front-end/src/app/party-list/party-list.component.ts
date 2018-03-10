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

  parties = this.apiService.getParties();

  onSelectParty(name) : void {
    var id: number;
    for (let i = 0; i < this.parties.length; i++)
    {
      if (this.parties[i].name == name)
        id = this.parties[i].id;
    }
    this.router.navigateByUrl('/guest/' + name + '/' + id + '/password');
  }

  ngOnInit() {
  }

}
