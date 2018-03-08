import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {ActivatedRoute, Router} from '@angular/router'
=======
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
>>>>>>> e474e020eafbe93a76e37e1703a0c5f7edb1b10c

@Component({
  selector: 'app-existing-party-password',
  templateUrl: './existing-party-password.component.html',
  styleUrls: ['./existing-party-password.component.css']
})

export class ExistingPartyPasswordComponent implements OnInit {

<<<<<<< HEAD
  constructor(private route:ActivatedRoute, private router:Router) { }
  partyName: string;
  partyid: number;
  ngOnInit() {
  	this.partyName = this.route.snapshot.paramMap.get('name');
  	this.partyid = +this.route.snapshot.paramMap.get('id');
=======
  constructor(private route: ActivatedRoute) { }

  partyName: string;

  ngOnInit() {
    this.partyName = this.route.snapshot.paramMap.get('name');
>>>>>>> e474e020eafbe93a76e37e1703a0c5f7edb1b10c
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
