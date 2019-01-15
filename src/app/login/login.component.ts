import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => {
        if (result) {
          const path = this.route.snapshot.queryParamMap.get('returnedUrl');
          this.router.navigate([path || '/']);
        }
      }, err => {
        console.log('ko hopppppp le');
        this.invalidLogin = true;
      });
  }
}
