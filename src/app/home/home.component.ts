import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private userInfo: any;
  constructor(private authService: AuthService) { }
  logout() {
    this.authService.logout();
    // console.log('logged out');
  }

  isLoggedIn(): boolean {
    // console.log('isLoggedOut of home component is called');
    return this.authService.isLoggedIn();
  }
  ngOnInit(){
    // console.log('home created');
    this.userInfo = this.authService.currentUser();
  }
}
