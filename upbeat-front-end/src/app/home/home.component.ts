import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { User } from './../user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiService) { }

  onSelectGuest() : void {
    this.router.navigateByUrl('/guest');
  }

  onSelectDj() : void {
    this.router.navigateByUrl('/dj/login');
  }

  ngOnInit() {
  }


}
