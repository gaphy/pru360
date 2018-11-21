import { SettingsService } from './settings.service';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  S_URL = ''; prin: any;
  constructor(private http: Http, private settings: SettingsService) {
    this.S_URL = settings.getURL();
  }

  login(username: string, pass: string) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Basic b2xvcnVudG9iaS5vbGFkaXBvQG5ld3BydWRlbnRpYWwuY29tOmVAdm9sdXRpb24xYXJ5'
    });
    // tslint:disable-next-line:max-line-length
   const datar2 = '{\r\n  \"params\": [\r\n    {\r\n      \"name\": \"email\",\r\n      \"param_type\": \"string\",\r\n      \"value\": \"' + username + '\"\r\n    },\r\n{\r\n      \"name\": \"password\",\r\n      \"param_type\": \"string\",\r\n      \"value\": \"' + pass + '\"\r\n    }\r\n  ],\r\n  \"schema\": {\r\n    \"_field_name_\": \"string\"\r\n  },\r\n  \"wrapper\": \"\",\r\n  \"returns\": \"\"\r\n}';

   return this.http.post(this.S_URL + '/api/v2/apps/_proc/CS_Login',
    datar2, {headers: headers})
    .pipe(map(
        (response: Response) => {
          const data = response.json();
          // console.log(data);
          return data;
        })
    )
    .pipe(catchError(
        (error => {
          console.log(error);
          return throwError('Error Processing Request');
        })
    ));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  // getUser() {
  //   // console.log(localStorage.getItem('currentUser'))
  //  return localStorage.getItem('currentUser');
  // }
}
