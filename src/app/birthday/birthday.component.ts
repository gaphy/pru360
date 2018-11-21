import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  bdays = [];
  loader = '';
  constructor(private data: DataService) { }

  setTitle = (tt: any, ss: boolean) => {
    this.data.setPageData(tt, ss);
  }

  loadBdays = () => {
    this.loader = 'card-header bg-transparent border-0 ld-ext-right running popo';
    this.data.getBday().subscribe(
      (bdays: any[]) => {
        this.bdays = bdays;
        this.loader = 'card-header bg-transparent border-0 ld-ext-right';
      }, (error) => `{
        this.loader = 'card-header bg-transparent border-0 ld-ext-right';
        swal({
          title: "Failed to Load Data!",
          text: "Do you want to try again?",
          icon: "error",
          buttons: true,
        })
        .then((atry) => {
          if (atry) {
            this.loadBdays();
          }
        });
        console.log(error);
      }`
    );
  }
  ngOnInit() {
    this.loadBdays();
    this.setTitle('Birthdays Today', false);
  }

}
