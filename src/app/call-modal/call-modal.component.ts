import { Calldata } from './../calldata';
import { finalize } from 'rxjs/operators';
import { DataService } from './../data.service';
import { CommonService } from './../common.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-call-modal',
  templateUrl: './call-modal.component.html',
  styleUrls: ['./call-modal.component.css']
})
export class CallModalComponent implements OnInit {
  customer: {id: string, name: string};
  calldata: Calldata; loading: boolean;
  @ViewChild('closeCallModal') closeCallModal: ElementRef;

  constructor(private data: DataService, private comm: CommonService) {}

  ngOnInit() {
    this.comm.currentMessage.subscribe(message => this.customer = message);
    this.loading = false;
  }

  logcall(form: NgForm) {
    this.loading = true;
    this.calldata = form.value;
    // form.reset();

    this.data.logcall(this.customer.id, this.calldata)
    .pipe(finalize(() => this.loading = false))
    .subscribe(
      () => {
        swal('Done!', 'Call Logged Successfully', 'success');
        form.reset();
        this.closeCallModal.nativeElement.click();
        this.getcalls(this.customer.id);
      },
      (error) => swal('Error!', error, 'error')
    );
  }

  getcalls(cust: any) {
    this.data.getcalls(cust)
      .pipe(finalize(() => console.log('Complete')))
      .subscribe(
        (res: any[]) => this.comm.updateCallLog(res),
        (error) => console.log(error)
      );
  }

}
