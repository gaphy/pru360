import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  cust: [];
  loader: string;
  name: string;


  constructor(private data: DataService, private router: Router) { }

  getcustomers (name: string) {
    this.loader = 'card-header bg-transparent border-0 ld-ext-right running popo';
    this.data.getCustomers(name)
      .pipe(finalize(() => this.loader = 'card-header bg-transparent border-0 ld-ext-right'))
      .subscribe(
        (custs: any) => this.cust = custs,
        (error) => {
          swal('Oops', error, error);
        }
    );
  }

  showCustomer(cus: {CusID: string, CusName: string}) {
    this.router.navigate(['/customer', cus.CusID, cus.CusName]);
  }

  ngOnInit() {
    this.data.setPageData('Customers', false);
    this.loader = 'card-header bg-transparent border-0 ld-ext-right';
  }

}
