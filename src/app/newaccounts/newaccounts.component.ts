import { finalize } from 'rxjs/operators';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newaccounts',
  templateUrl: './newaccounts.component.html',
  styleUrls: ['./newaccounts.component.css']
})
export class NewaccountsComponent implements OnInit {
  acts: [];
  loader: string;
  accdate: string;

  constructor(private data: DataService) {  }

  getnaccounts(str: string) {
    this.loader = 'card-header bg-transparent border-0 ld-ext-right running popo';
    this.data.getnAccounts(str)
      .pipe(finalize(() => this.loader = 'card-header bg-transparent border-0 ld-ext-right'))
      .subscribe(
        (acts: any) => this.acts = acts,
        (error) => swal('Oops', error, error)
      );
  }

  ngOnInit() {
    this.data.setPageData('New Accounts', false);
    this.loader = 'card-header bg-transparent border-0 ld-ext-right';
  }

}
