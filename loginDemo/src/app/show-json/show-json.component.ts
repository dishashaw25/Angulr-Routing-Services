import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-json',
  templateUrl: './show-json.component.html',
  styleUrls: ['./show-json.component.less']
})
export class ShowJSONComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }
  value: Array<string>;
  ngOnInit() {
    this.dataService.getJSON().subscribe(data => this.value = data);
    console.log(this.value);
  }

}
