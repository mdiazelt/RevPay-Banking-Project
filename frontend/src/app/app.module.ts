import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalAccountComponent } from './components/personal-account/personal-account.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SendRequestMoneyComponent } from './components/send-request-money/send-request-money.component';
import { PersonalWalletComponent } from './components/personal-wallet/personal-wallet.component';
import { BusinessAccountComponent } from './components/business-account/business-account.component';
import { PersonalTransactionListComponent } from './components/personal-transaction-list/personal-transaction-list.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { LoginAccountComponent } from './components/login-account/login-account.component';
import { BusinessInvoicesComponent } from './components/business-invoices/business-invoices.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PersonalAccountComponent,
    NavbarComponent,
    SendRequestMoneyComponent,
    PersonalWalletComponent,
    BusinessAccountComponent,
    PersonalTransactionListComponent,
    RegisterAccountComponent,
    LoginAccountComponent,
    BusinessInvoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
