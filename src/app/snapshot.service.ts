import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnapshotService {

  constructor(private http: Http) { }

  getSnapshot() {
    const user = '@mariam';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
    const datar = `
    {
      "params":[
         {
            "name":"user",
            "param_type":"string",
            "value":"@mariam"
         }
      ],
      "schema":{
         "_field_name_":""
      },
      "wrapper":"",
      "returns":""
   }
    `;
   // tslint:disable-next-line:max-line-length
   const datar2 = '{\r\n  "params": [\r\n    {\r\n      "name": "user",\r\n      "param_type": "string",\r\n      "value": "' + user + '"\r\n    }\r\n  ],\r\n  "schema": {\r\n    "_field_name_": ""\r\n  },\r\n  "wrapper": "",\r\n  "returns": ""\r\n}';
    return this.http.post('https://services.newprudential.com/api/v2/apps/_proc/CS_GetSnapshots',
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
}
