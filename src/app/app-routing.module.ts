import { ProspectsComponent } from './prospects/prospects.component';
import { DetailsComponent } from './customers/details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-component/login-component.component';
import { DashboardComponent } from './dashboard-component/dashboard-component.component';
import { CustomersComponent } from './customers/customers.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { NewaccountsComponent } from './newaccounts/newaccounts.component';
import { ColdcallsComponent } from './coldcalls/coldcalls.component';
import { RepaymentComponent } from './repayment/repayment.component';
import { PastdueComponent } from './pastdue/pastdue.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'customers', component: CustomersComponent},
    { path: 'customer/:id/:name', component: DetailsComponent },
    {path: 'birthday', component: BirthdayComponent},
    {path: 'newaccounts', component: NewaccountsComponent},
    {path: 'coldcalls', component: ColdcallsComponent},
    {path: 'repayment', component: RepaymentComponent},
    {path: 'pastdue', component: PastdueComponent},
    {path: 'details', component: DetailsComponent},
    {path: 'prospects', component: ProspectsComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
