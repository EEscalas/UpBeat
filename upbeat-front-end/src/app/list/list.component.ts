import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router) { }

  homeClick(){ this.router.navigateByUrl('/'); }
  partyClick(){ this.router.navigateByUrl('/guest'); }
  loginClick(){ this.router.navigateByUrl('/dj'); }

  ngOnInit() {
  }

}
