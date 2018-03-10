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
  partyAccessKey: string;
  
  onSelectCreate(){
  	//assign name to party
  	this.partyName = (<HTMLInputElement>document.getElementById("partyName")).value;
  	// put party into database
  	this.partyPassword = (<HTMLInputElement>document.getElementById("password")).value;
    this.partyAccessKey = (<HTMLInputElement>document.getElementById("accessKey")).value;

    console.log(this.partyName); 
    console.log(this.partyPassword);
    console.log(this.partyAccessKey);
    var temp:Party = new Party();
    
    temp = this.apiService.createParty(this.partyName, this.partyPassword, this.partyAccessKey);

    console.log(this.apiService.getParties()); 
   
    if(temp != null)
      this.router.navigateByUrl('/dj/' + this.partyName + '/' + temp.id);
  }

}
