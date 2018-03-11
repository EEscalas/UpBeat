import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../api.service';
import { Party } from '../parties';

@Component({
  selector: 'app-existing-party-password',
  templateUrl: './existing-party-password.component.html',
  styleUrls: ['./existing-party-password.component.css']
})

export class ExistingPartyPasswordComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router, private apiService: ApiService) { }
  // Initialize Variables
  partyName: string;
  partyid: number;
  partyAccessKey: string;
  existingParties: Party[];

  // Get list of parties in database and get party information
  getParties(){
    this.apiService.getParties().then(result=> {
      this.existingParties = result;
      this.partyName = this.route.snapshot.paramMap.get('name');
      this.partyid = +this.route.snapshot.paramMap.get('id');

      for (let i = 0; i < this.existingParties.length; i++) // need to modify to use getParties from api.service.ts
      {
        if (this.existingParties[i].id == this.partyid && this.existingParties[i].name == this.partyName)
        {
          this.partyAccessKey = this.existingParties[i].accessKey;
        }
      }
    })
  }

  ngOnInit() {
    this.getParties();
  }

  onSelectButton(name,id):void{
  	//check password
    let passCheck :boolean = false;
    console.log(this.partyAccessKey);
    if((<HTMLInputElement>document.getElementById("accessKey")).value == this.partyAccessKey){
      passCheck = true;
    }
  	if(passCheck){
    	this.router.navigateByUrl('/guest/' + name + '/' + id );
  	}
  	else{
  		alert("Invalid Party Access Key, please try again.");
  	}
  }
  
}
