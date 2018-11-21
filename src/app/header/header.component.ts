import { User } from './../user';
import { AuthService } from './../auth.service';
import { DataService } from './../data.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@NgModule({
  providers: [DataService, AuthService]
})

export class HeaderComponent implements OnInit {
  snap = [];
  bdc = 0;
  pgdata = [];
  currentuser: User = new User();

  constructor(private snapshot: DataService, private auth: AuthService, private router: Router) {
    this.currentuser = JSON.parse(localStorage.getItem('currentUser'));
  }

   verify() {
     if (!this.currentuser) {
       this.router.navigate(['/']);
     } else {
      this.loadSnapshot();
      this.loadBday();
      this.getPgdata();
     }
   }

  getPgdata() {
    this.pgdata = this.snapshot.getPageData();
    // console.log(this.pgdata);
  }

  loadSnapshot() {
    // console.log(this.currentuser.Useremail);
    this.snapshot.getSnapshot(this.currentuser.Useremail)
    .subscribe(
      (snaps: any[]) => {
        this.snap = snaps[0];
      },
      (error) => console.log(error)
    );
  }

  loadBday() {
    this.snapshot.getBday()
    .subscribe(
      (bday: any[]) => {
        this.bdc = bday.length;
      },
      (error) => console.log(error)
    );
  }



  ngOnInit() {
    this.verify();
  }

}
