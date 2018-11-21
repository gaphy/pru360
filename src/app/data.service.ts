import { Calldata } from './calldata';
import { SettingsService } from './settings.service';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  pgdata = [];
  S_URL = '';
  currentuser: User = new User();
  calldata: Calldata = new Calldata();

  constructor(private http: Http, private setting: SettingsService) {
    this.S_URL = setting.getURL();
    this.currentuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getPageData() {
    return this.pgdata;
  }

  setPageData(title: any, snapshot: boolean) {
    this.pgdata.unshift({
      'title': title,
      'snapshot': snapshot
    });
  }

  getSnapshot(user: string) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
    // tslint:disable-next-line:max-line-length
    const datar2 = '{\r\n  "params": [\r\n    {\r\n      "name": "user",\r\n      "param_type": "string",\r\n      "value": "' + user + '"\r\n    }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';
    return this.http.post(this.S_URL + '/api/v2/apps/_proc/CS_GetSnapshots',
      datar2, {headers: headers})
      .pipe(map(
          (response: Response) => {
            const data = response.json();
            return data;
          })
      )
      .pipe(catchError(
          (error => {
            return throwError('Error Processing Request');
          })
      ));
  }

  getBday() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });

    return this.http.post(this.S_URL + '/api/v2/apps/_proc/CS_getbday', '',
    {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        })
    )
    .pipe(catchError(
        (error => {
          return throwError('Error Processing Request');
        })
    ));
  }

  getCustomers(searchstr: any) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
   // tslint:disable-next-line:max-line-length
   const datar = '{\r\n  "params": [\r\n    {\r\n      "name": "name",\r\n      "param_type": "string",\r\n      "value": "' + searchstr + '"\r\n    }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';
   return this.http.post(this.S_URL + '/api/v2/apps/_proc/CS_GetCustomers',
    datar, {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        })
    )
    .pipe(catchError(
        (error => {
          return throwError('Error Processing Request');
        })
    ));
  }

  getnAccounts(searchstr: any) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
   // tslint:disable-next-line:max-line-length
   const datar = '{\r\n  "params": [\r\n    {\r\n      "name": "date",\r\n      "param_type": "string",\r\n      "value": "' + searchstr + '"\r\n    }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';

   return this.http.post(this.S_URL + '/api/v2/apps/_proc/CS_GetnAccounts',
    datar, {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        })
    )
    .pipe(catchError(
        (error => {
          return throwError('Error Processing Request');
        })
    ));
  }

  getRepaylist(days: any) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
   // tslint:disable-next-line:max-line-length
   const datar = '{\r\n  "params": [\r\n    {\r\n      "name": "left",\r\n      "param_type": "string",\r\n      "value": "' + days + '"\r\n    }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';
   return this.http.post(this.S_URL + '/api/v2/apps/_proc/CS_getrepaylist',
    datar, {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          console.log(data);
          return data;
        })
    )
    .pipe(catchError(
        (error => {
          return throwError('Error Processing Request');
        })
    ));
  }

  // Customer details

  getprofile(customer: any) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
   // tslint:disable-next-line:max-line-length
   const datar = '{\r\n  "params": [\r\n    {\r\n      "name": "cusid",\r\n      "param_type": "string",\r\n      "value": "' + customer + '"\r\n    }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';

   return this.http.post(this.S_URL + '/api/v2/apps/_proc/CS_getprofile',
    datar, {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        })
    )
    .pipe(catchError(
        (error => {
          return throwError('Error Processing Request');
        })
    ));
  }

  getaccounts(customer: any) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
   // tslint:disable-next-line:max-line-length
   const datar = '{\r\n  "params": [\r\n    {\r\n      "name": "cusid",\r\n      "param_type": "string",\r\n      "value": "' + customer + '"\r\n    }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';

   return this.http.post(this.S_URL + '/api/v2/apps/_proc/CS_getaccounts',
    datar, {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        })
    )
    .pipe(catchError(
        (error => {
          return throwError('Error Processing Request');
        })
    ));
  }

  getcontact(customer: any) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
   // tslint:disable-next-line:max-line-length
   const datar = '{\r\n  "params": [\r\n    {\r\n      "name": "cusid",\r\n      "param_type": "string",\r\n      "value": "' + customer + '"\r\n    }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';

   return this.http.post(this.S_URL + '/api/v2/apps/_proc/CS_getcontactinfo',
    datar, {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        })
    )
    .pipe(catchError(
        (error => {
          return throwError('Error Processing Request');
        })
    ));
  }

  getcards(customer: any) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
   // tslint:disable-next-line:max-line-length
   const datar = '{\r\n  "params": [\r\n    {\r\n      "name": "cusid",\r\n      "param_type": "string",\r\n      "value": "' + customer + '"\r\n    }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';

   return this.http.post(this.S_URL + '/api/v2/apps/_proc/CS_getcards',
    datar, {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        })
    )
    .pipe(catchError(
        (error => {
          return throwError('Error Processing Request');
        })
    ));
  }

  getTNF(customer: any) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
   // tslint:disable-next-line:max-line-length
   const datar = '{\r\n  "params": [\r\n    {\r\n      "name": "cusid",\r\n      "param_type": "string",\r\n      "value": "' + customer + '"\r\n    }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';

   return this.http.post(this.S_URL + '/api/v2/apps/_proc/CS_getTNF2',
    datar, {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        })
    )
    .pipe(catchError(
        (error => {
          return throwError('Error Processing Request');
        })
    ));
  }

  getcalls(customer: any) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
   // tslint:disable-next-line:max-line-length
   const datar = '{\r\n  "params": [\r\n    {\r\n      "name": "cusid",\r\n      "param_type": "string",\r\n      "value": "' + customer + '"\r\n    }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';

   return this.http.post(this.S_URL + '/api/v2/apps/_proc/CS_getcalllogs2',
    datar, {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          console.log(data);
          return data;
        })
    )
    .pipe(catchError(
        (error => {
          return throwError('Error Processing Request');
        })
    ));
  }

  logcall (cus: string, calldata: Calldata) {
    const officer = this.currentuser.Email;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
   // tslint:disable-next-line:max-line-length
   const datar = '{\r\n  "params": [\r\n {\r\n "name": "cusid",\r\n "param_type": "string",\r\n "value": "' + cus + '"\r\n },{\r\n "name": "category",\r\n "param_type": "string",\r\n "value": "' + calldata.cat + '"\r\n },{\r\n "name": "remarks",\r\n "param_type": "string",\r\n "value": "' + calldata.remarks + '"\r\n },{\r\n "name": "duration",\r\n "param_type": "string",\r\n "value": "' + calldata.duration + '"\r\n },{\r\n "name": "type",\r\n "param_type": "string",\r\n "value": "' + calldata.type + '"\r\n },{\r\n "name": "status",\r\n "param_type": "string",\r\n "value": "' + calldata.status + '"\r\n },{\r\n "name": "officer",\r\n "param_type": "string",\r\n "value": "' + officer + '"\r\n }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';

   return this.http.post(this.S_URL + '/api/v2/apps/_proc/CS_newcall2',
    datar, {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          console.log(data);
          return 'success';
        })
    )
    .pipe(catchError(
        (error => {
          return throwError('Error Processing Request');
        })
    ));
  }

  getprospects(customer: any) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
   // tslint:disable-next-line:max-line-length
   const datar = '{\r\n  "params": [\r\n    {\r\n      "name": "sdata",\r\n      "param_type": "string",\r\n      "value": "' + customer + '"\r\n    }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';
   console.log(datar);
   return this.http.post(this.S_URL + '/api/v2/apps/_proc/CS_getprospect',
    datar, {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          console.log(data);
          return data;
        })
    )
    .pipe(catchError(
        (error => {
          return throwError('Error Processing Request');
        })
    ));
  }

  blockcard(pan: any) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
   // tslint:disable-next-line:max-line-length
   const datar = '{\r\n  "params": [\r\n    {\r\n      "name": "pan",\r\n      "param_type": "string",\r\n      "value": "' + pan + '"\r\n    },{\r\n      "name": "addedby",\r\n      "param_type": "string",\r\n      "value": "' + this.currentuser.Email + '"\r\n    }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';
   console.log(datar);
   return this.http.post(this.S_URL + '/api/v2/apps/_proc/Card_Blacklist',
    datar, {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          console.log(data);
          return 'success';
        })
    )
    .pipe(catchError(
        (error => {
          console.log(error);
          return throwError('Error Processing Request');
        })
    ));
  }

  unblockcard(pan: any) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
   // tslint:disable-next-line:max-line-length
   const datar = '{\r\n  "params": [\r\n    {\r\n      "name": "pan",\r\n      "param_type": "string",\r\n      "value": "' + pan + '"\r\n    }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';
   console.log(datar);
   return this.http.post(this.S_URL + '/api/v2/apps/_proc/Card_Whitelist',
    datar, {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        })
    )
    .pipe(catchError(
        (error => {
          return throwError('Error Processing Request');
        })
    ));
  }
}
