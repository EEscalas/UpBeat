import { Component, OnInit } from '@angular/core';
import { Party } from '../parties';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-party',
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.css']
})
export class CreatePartyComponent implements OnInit {

  constructor(private router:Router, private apiService: ApiService) { }

  ngOnInit() {
  }
  //make a party
  //party:Party;
  partyName: string;
  partyPassword:string;
  
  onSelectCreate(){
  	//assign name to party
  	this.partyName = (<HTMLInputElement>document.getElementById("partyName")).value;
  	// put party into database
  	this.partyPassword = (<HTMLInputElement>document.getElementById("password")).value;

    console.log(this.partyName); 
    console.log(this.partyPassword);
    var temp:Party = new Party();
    
    this.apiService.createParty(this.partyName, this.partyPassword);

    console.log(this.apiService.getParties()); 
  	this.router.navigateByUrl('/guest');//'
  }

}
