import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RouteResolver implements Resolve<Observable<any>>{
  constructor(private http: HttpClient) { }
  resolve() {
    return this.http.get("./assets/loginData.jsn");
  }
}
