import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-existing-party-password',
  templateUrl: './existing-party-password.component.html',
  styleUrls: ['./existing-party-password.component.css']
})

export class ExistingPartyPasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  partyName: string;

  ngOnInit() {
    this.partyName = this.route.snapshot.paramMap.get('name');
  }

}
