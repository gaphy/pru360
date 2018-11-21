import { Response } from '@angular/http';
import { AuthService } from './../auth.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})

@NgModule({
  providers: [AuthService]
})

export class LoginComponent implements OnInit {
  // creds: {user: string, pass: string};
  username = ''; pass = '';
  loader = '';
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.auth.logout();
    this.loader = 'btn btn-primary my-4 ld-ext-right';
    const ip = window.location.origin;
    console.log(ip);
  }

  Login() {
    this.loader = 'btn btn-primary my-4 ld-ext-right running popo';
    this.auth.login(this.username, this.pass).subscribe(
      (user: any[]) => {
        this.loader = 'btn btn-primary my-4 ld-ext-right';

        if (user[0].Response === '1') {
            localStorage.setItem('currentUser', JSON.stringify(user[0]));
            this.router.navigate(['/dashboard']);
        } else if (user[0].Response === '6') {
            swal('Too many attempts', 'Your account has been locked out. Please contact Administrator', 'error');
        } else if (user[0].Response === '9') {
            swal('Locked!', 'Your account has been locked out. Please contact Administrator', 'error');
        } else {
            swal('Oops!', 'Invalid Username/Password', 'error');
        }
      },
      (error) => {
        console.log(error);
        this.loader = 'btn btn-primary my-4 ld-ext-right';
      }
    );
  }


}
