import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

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
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
