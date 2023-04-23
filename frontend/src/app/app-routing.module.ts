import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalAccountComponent } from "./components/personal-account/personal-account.component";
import { PersonalTransactionListComponent } from './components/personal-transaction-list/personal-transaction-list.component';
import { SendRequestMoneyComponent } from './components/send-request-money/send-request-money.component';
import { PersonalWalletComponent } from './components/personal-wallet/personal-wallet.component';
import { BusinessAccountComponent } from './components/business-account/business-account.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { LoginAccountComponent } from './components/login-account/login-account.component';
import { BusinessInvoicesComponent } from './components/business-invoices/business-invoices.component';
const routes: Routes = [
  
  {path: 'personal', component: PersonalAccountComponent},
  {path: 'money', component: SendRequestMoneyComponent},
  {path: 'business', component:BusinessAccountComponent},
  {path: 'register',component:RegisterAccountComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},

  {path:'login',children:[
    {path:'',component:LoginAccountComponent},
    {path:'register',component:RegisterAccountComponent}]},

  {path:'personal', children:[
    { path: '', component: PersonalAccountComponent },
    {path:'transaction-history', component:PersonalTransactionListComponent},
    {path:'wallet', component:PersonalWalletComponent}]},

  {path:'business', children:[
    { path: '', component: BusinessAccountComponent },
    {path:'send-invoices', component:BusinessInvoicesComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
