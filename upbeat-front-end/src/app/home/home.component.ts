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

<<<<<<< HEAD
  onSelectDJ(): void{
  	this.router.navigateByUrl('/dj');
  }
=======
  onSelectDj() : void {
    this.router.navigateByUrl('/dj/login');
  }

>>>>>>> e474e020eafbe93a76e37e1703a0c5f7edb1b10c
  ngOnInit() {
  }


}
