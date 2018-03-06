import { Component, OnInit } from '@angular/core';
import { Party, PARTIES } from '../parties';
import { Router } from '@angular/router';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {

  constructor(private router: Router) { }

  parties = PARTIES;

  onSelectParty(name) : void {
    this.router.navigateByUrl('/guest/' + name + '/password');
  }

  ngOnInit() {
  }

}
