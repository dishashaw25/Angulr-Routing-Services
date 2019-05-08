import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-json',
  templateUrl: './show-json.component.html',
  styleUrls: ['./show-json.component.less']
})
export class ShowJSONComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  value: any;
  ngOnInit() {
    //this.dataService.getJSON().subscribe(data => this.value = data);
    this.value = this.route.snapshot.data;
    console.log(this.value);
  }

}
