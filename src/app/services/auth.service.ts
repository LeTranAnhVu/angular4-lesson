import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) {
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials))
      .map((response) => {
        // error ?
        if (response && response.status !== 200) {
          throw response;
        }
        // goood result ?
        // save the token
        const jwt = response.json();
        localStorage.setItem('token', jwt.token);
        return true;
      })
      .catch(err => {
        console.log('ERROR: ', err);
        return Observable.throw(err);
      });
  }

  logout() {
  }

  isLoggedIn() {
    return false;
  }
}

