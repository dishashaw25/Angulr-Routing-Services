import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent {
  constructor(private dataService: DataServiceService, private router: Router) { }

  userName: string;
  password: string;
  todayDate:Date;
  jsonData:Array<any>;
  @Output() name = new EventEmitter<string>();

  ngOnInit(){
    this.dataService.getJSON().subscribe(data => this.jsonData = data);
   this.todayDate = this.dataService.getTodayDate();
  }


  onSubmit() {
      for (let i = 0; i < this.jsonData.length; i++) {
        if (this.jsonData[i].userName == this.userName && this.jsonData[i].password == this.password) {
          this.router.navigate(['/loginSuccess']);
          return;
        }
      }
       this.router.navigate(['/loginFailure']);
      }
}