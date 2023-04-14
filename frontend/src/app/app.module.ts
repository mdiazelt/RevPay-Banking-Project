import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalAccountComponent } from './components/personal-account/personal-account.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SendRequestMoneyComponent } from './components/send-request-money/send-request-money.component';
import { PersonalWalletComponent } from './components/personal-wallet/personal-wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalAccountComponent,
    NavbarComponent,
    SendRequestMoneyComponent,
    PersonalWalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
