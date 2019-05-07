import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) {
    //this.getJSON().subscribe(data => console.log(data));
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/loginData.json");
  }

  public getTodayDate(){
    let ndate = new Date();
    return ndate;
  }

}
