import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  local_url = 'http://192.168.10.44';
  rem_url = 'https://services.newprudential.com';
  constructor(private http: Http) { }

  getURL () {
    return this.rem_url;
    // const ip = window.location.hostname;
    // if ((ip === 'localhost') || (ip === '192.168.10.30')) {
    //    return this.local_url;
    // }  else {
    //    return this.rem_url;
    // }
  }

  // getURL2 () {

  //   return this.http.get('https://jsonip.com/')
  //   .pipe(map(
  //       (response: Response) => {
  //         const data = response.json();
  //         console.log(data);
  //         return data;
  //       })
  //   )
  //   .pipe(catchError(
  //       (error => {
  //         console.log(error);
  //         return throwError('Error Processing Request');
  //       })
  //   ));
  // }
}
