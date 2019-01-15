import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  getOrders() {
    const header = new Headers();
    const token = localStorage.getItem('token').toString();
    header.append('Authorization', 'Bearer ' + token);

    return this.http.get('/api/orders', { headers: header })
      .map(response => response.json());
  }
}
