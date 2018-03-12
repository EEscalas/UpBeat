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

  // Initialize variables
  partyName: string;
  partyPassword:string;
  partyAccessKey: string;
  existingParties: Party[];
  temp: Party;
  checkUnique: boolean;

  ngOnInit() {
    // Initialize parties
    this.temp = new Party();
    this.checkUnique = false;
    this.getParties();
  }

  getParties(){
    this.apiService.getParties().then(result=> {
      this.existingParties = result;
    })
  }

  // Create party
  onSelectCreate(){
    // Get party information
  	this.partyName = (<HTMLInputElement>document.getElementById("partyName")).value;
  	this.partyPassword = (<HTMLInputElement>document.getElementById("password")).value;
    this.partyAccessKey = (<HTMLInputElement>document.getElementById("accessKey")).value;

    // Create party object
    this.temp = new Party();
    this.temp.name = this.partyName;
    this.temp.password = this.partyPassword;
    this.temp.accessKey = this.partyAccessKey;

    // Use apiService to create party in database
    var self = this;
    this.apiService.getParties().then(parties =>{
      var flag = false;
      for(let i = 0; i < parties.length; i++){
        if(parties[i].name == this.partyName){
          flag = true;
        }
      }

      if(flag){
        this.checkUnique = true;
      }
      else{
        self.apiService.createParty(this.temp).then(result => {
          if(result != 'err')
          {
            this.router.navigateByUrl('/dj/' + this.partyName + '/' + result.id);
          }
          else
            console.log('err');
        });
      }
    });
    // this.apiService.createParty(this.temp).then(result => {
    //   if(result != 'err')
    //   {
    //     this.router.navigateByUrl('/dj/' + this.partyName + '/' + result.id);
    //   }
    //   else
    //     console.log('err');
    // });

  }

  onSelectView(){
    // Update party list
    this.getParties();

    // Get party information
    this.partyName = (<HTMLInputElement>document.getElementById("existingPartyName")).value;
    this.partyPassword = (<HTMLInputElement>document.getElementById("existingPartyPassword")).value;
    var partyExists: boolean = false;

    // Look for party in existing parties list
    for (let i = 0; i < this.existingParties.length; i++)
    {
      if (this.existingParties[i].name == this.partyName)
      {
        partyExists = true;
        if (this.existingParties[i].password == this.partyPassword)
          this.router.navigateByUrl('/dj/' + this.partyName + '/' + this.existingParties[i].id);
        else
          alert("Invalid Party Password, please try again.");
      }
    }
    if (!partyExists)
      alert("This party does not exist, please create a new party.");
  }

}
