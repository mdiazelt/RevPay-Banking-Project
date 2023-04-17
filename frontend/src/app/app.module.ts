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
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { LoginAccountComponent } from './components/login-account/login-account.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalAccountComponent,
    NavbarComponent,
    SendRequestMoneyComponent,
    PersonalWalletComponent,
    BusinessAccountComponent,
    RegisterAccountComponent,
    LoginAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
