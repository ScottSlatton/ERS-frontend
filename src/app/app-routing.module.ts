import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { CreateReimbursementFormComponent } from './components/create-reimbursement-form/create-reimbursement-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: "reimbursement/new", component: CreateReimbursementFormComponent},
  { path:'', component: LoginComponent },
  { path: '**', redirectTo: "/login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
