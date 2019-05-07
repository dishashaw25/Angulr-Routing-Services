import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.less']
})
export class LoginSuccessComponent implements OnInit {

  constructor() { }

  @Input() name: string;

  ngOnInit() {
  }

}
