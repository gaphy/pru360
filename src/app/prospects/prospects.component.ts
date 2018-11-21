import { DataService } from 'src/app/data.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-prospects',
  templateUrl: './prospects.component.html',
  styleUrls: ['./prospects.component.css']
})
export class ProspectsComponent implements OnInit {
  loader: string; str: string;
  pros: any[];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.str = '';
    this.data.setPageData('Prospects', false);
    this.loader = 'card-header bg-transparent border-0 ld-ext-right';
  }

  getprospects (name: string) {
    this.loader = 'card-header bg-transparent border-0 ld-ext-right running popo';
    this.data.getprospects(name)
      .pipe(finalize(() => this.loader = 'card-header bg-transparent border-0 ld-ext-right'))
      .subscribe(
        (pros: any) => this.pros = pros,
        (error) => {
          swal('Oops', error, error);
        }
    );
  }

}
