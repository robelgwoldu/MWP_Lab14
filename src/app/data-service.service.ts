import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {

  constructor(public http: Http) { }

  getData() {
    return this.http.get('http://jsonplaceholder.typicode.com/users/1').map(data => data.json());
  }

  getPostData() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1').map(data => data.json());
  }

}
