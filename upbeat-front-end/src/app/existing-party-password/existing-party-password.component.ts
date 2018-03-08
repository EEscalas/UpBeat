import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-existing-party-password',
  templateUrl: './existing-party-password.component.html',
  styleUrls: ['./existing-party-password.component.css']
})
export class ExistingPartyPasswordComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }
  partyName: string;
  partyid: number;
  ngOnInit() {
  	this.partyName = this.route.snapshot.paramMap.get('name');
  	this.partyid = +this.route.snapshot.paramMap.get('id');
  }
  onSelectButton(name,id):void{
  	//check password
  	let passCheck :boolean = true;
  	if(passCheck){
    	this.router.navigateByUrl('/guest/' + name + '/' + id );
  	}
  	else{
  		alert("Invalid Password, please try again.");
  	}
  }
  
}
