import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public customer: {id: string, name: string};
  public call: any[];
  private messageSource = new BehaviorSubject(this.customer);
  private callSource = new BehaviorSubject(this.call);

  currentMessage = this.messageSource.asObservable();
  currentCall = this.callSource.asObservable();

  constructor() {}

  updateCustomer(customer: {id: string, name: string}) {
    // console.log(customer);
    this.messageSource.next(customer);
  }

  updateCallLog(call: any[]) {
    this.callSource.next(call);
  }
}
