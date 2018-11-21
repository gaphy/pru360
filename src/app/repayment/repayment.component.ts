import { finalize } from 'rxjs/operators';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repayment',
  templateUrl: './repayment.component.html',
  styleUrls: ['./repayment.component.css']
})
export class RepaymentComponent implements OnInit {
  rems: any[]; loader = '';
  constructor(private data: DataService, private router: Router) { }

  getrems(days: any) {
    this.loader = 'card-header bg-transparent border-0 ld-ext-right running popo';
    // console.log(days);
    this.data.getRepaylist(days)
      .pipe(finalize(() => this.loader = 'card-header bg-transparent border-0 ld-ext-right'))
      .subscribe(
        (rems: any) => this.rems = rems,
        (error) => swal('Oops', error, 'error')
    );
  }

  // showCustomer(cus: any[]) {
  //   this.router.navigate(['/customer', cus.cusid, cus.AccountDesc]);
  // }

  ngOnInit() {
    this.data.setPageData('Repayment Reminders', false);
    this.loader = 'card-header bg-transparent border-0 ld-ext-right';
  }

}
