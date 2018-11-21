import { CommonService } from './../../common.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/user';
import { DataService } from 'src/app/data.service';
import { AuthService } from 'src/app/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  profile: any[] = []; cusads: any[] = []; accts: any[] = []; cards: any[] = [];
  tnfs: any[] = []; logs: any[] = []; load: any; failed: any;
  currentuser: User; kana: boolean;
  public customer: {id: string, name: string};
  paramsSubscription: Subscription;

  public cusid: any;

  constructor(private data: DataService, private comm: CommonService, private route: ActivatedRoute, private router: Router) {
    this.currentuser = JSON.parse(localStorage.getItem('currentUser'));
    this.load = 0;
    this.kana = false;
  }

  ngOnInit() {
    this.comm.currentCall.subscribe(calls => this.logs = calls);
    this.verify();
    this.customer = {
       id: this.route.snapshot.params['id'],
       name: this.route.snapshot.params['name'],
    };

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.customer.id = params['id'];
          this.customer.name = params['name'];
          this.getProfile(this.customer.id);
          this.getAccounts(this.customer.id);
          this.getCustContact(this.customer.id);
          this.getCards(this.customer.id);
          this.getTNF(this.customer.id);
          this.getcalls(this.customer.id);

          // this.comm.cusData(this.customer.id);
        }
      );
  }

  ngOnDestroy() {

  }

  verify() {
    if (!this.currentuser) {
      this.router.navigate(['/']);
    }
  }

  modalevent() {
    this.comm.updateCustomer(this.customer);
  }

  getProfile(cust: any) {
    this.data.getprofile(cust)
      .pipe(finalize(() => this.load = this.load + 20))
      .subscribe(
        (res: any[]) => this.profile = res,
        (error) => console.log(error)
      );
  }

  getCustContact(cust: any) {
    this.data.getcontact(cust)
      .pipe(finalize(() => this.load = this.load + 20))
      .subscribe(
        (res: any[]) => this.cusads = res,
        (error) => console.log(error)
      );
  }

  getAccounts(cust: any) {
    this.data.getaccounts(cust)
      .pipe(finalize(() => this.load = this.load + 20))
      .subscribe(
        (res: any[]) => this.accts = res,
        (error) => console.log(error)
      );
  }

  getCards(cust: any) {
    this.data.getcards(cust)
      .pipe(finalize(() => this.load = this.load + 5))
      .subscribe(
        (res: any[]) => this.cards = res,
        (error) => console.log(error)
      );
  }

  getTNF(cust: any) {
    this.data.getTNF(cust)
      .pipe(finalize(() => this.load = this.load + 15))
      .subscribe(
        (res: any[]) => this.tnfs = res,
        (error) => console.log(error)
      );
  }

  getcalls(cust: any) {
    this.data.getcalls(cust)
      .pipe(finalize(() => this.load = this.load + 20))
      .subscribe(
        (res: any[]) => {
          this.logs = res[0];
          this.failed = res[1][0].failed;
          console.log(this.failed);
        },
        (error) => console.log(error)
      );
  }

  blockcard(pan: any) {
    this.kana = true;
    this.data.blockcard(pan)
    .pipe(finalize(() => this.kana = false))
    .subscribe(
      () => {
        swal('Done!', 'Card Blocked!', 'success');
        this.getCards(this.customer.id);
      },
      (error) => swal('Error!', error, 'error')
    );
  }

  unblockcard(pan: any) {
    this.kana = true;
    this.data.unblockcard(pan)
    .pipe(finalize(() => this.kana = false))
    .subscribe(
      () => {
        swal('Done!', 'Card Unblocked!', 'success');
        this.getCards(this.customer.id);
      },
      (error) => swal('Error!', error, 'error')
    );
  }

}
