import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
// import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import 'rxjs/Rx'


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private Url ="http://10.102.8.101:4000/customer/post/";
  constructor(private http:Http) { }
  addUser(emp: Employee): Observable<Response> {
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
    return this
        .http
        .post(this.Url, JSON.stringify(emp), options)
        
}
}
