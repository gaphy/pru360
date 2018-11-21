import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private data: DataService) { }
  setTitle = (tt: any, ss: boolean) => {
    this.data.setPageData(tt, ss);
  }
  ngOnInit() {
    this.setTitle('Dashboard', true);
  }

}
