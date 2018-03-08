import { Component, OnInit } from '@angular/core';
import { Party } from '../parties';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-party',
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.css']
})
export class CreatePartyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  //make a party
  party:Party;
  partyName: string;
  partyPassword:string;
  
  onSelectCreate(){
  	//assign name to party
  	this.partyName = (<HTMLInputElement>document.getElementById("partyName")).value;
  	// put party into database
  	this.partyPassword = (<HTMLInputElement>document.getElementById("password")).value;
  	this.router.navigateByUrl('/dj/' + this.partyName);
  }

}
