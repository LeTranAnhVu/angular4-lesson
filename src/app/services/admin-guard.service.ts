
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate() {
    const userInfo = this.auth.currentUser();
    if (userInfo && userInfo.admin) {
      return true;
    }
    this.router.navigate(['/no-access']);
    return false;
  }

}
