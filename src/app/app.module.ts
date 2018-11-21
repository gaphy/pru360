import { boolText } from './boolText.pipe';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import swal from 'sweetalert';


import { AppComponent } from './app.component';
import { LoginComponent } from './login-component/login-component.component';
import { DashboardComponent } from './dashboard-component/dashboard-component.component';
import { MenuComponent } from './menu-component/menu-component.component';
import { CustomersComponent } from './customers/customers.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { NewaccountsComponent } from './newaccounts/newaccounts.component';
import { ColdcallsComponent } from './coldcalls/coldcalls.component';
import { RepaymentComponent } from './repayment/repayment.component';
import { PastdueComponent } from './pastdue/pastdue.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CallModalComponent } from './call-modal/call-modal.component';
import { DetailsComponent } from './customers/details/details.component';
import { ProspectsComponent } from './prospects/prospects.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    CustomersComponent,
    BirthdayComponent,
    NewaccountsComponent,
    ColdcallsComponent,
    RepaymentComponent,
    PastdueComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    CallModalComponent,
    DetailsComponent,
    boolText,
    ProspectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule
    // ,Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
