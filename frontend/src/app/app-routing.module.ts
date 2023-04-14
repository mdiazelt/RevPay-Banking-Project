import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalAccountComponent } from "./components/personal-account/personal-account.component";

const routes: Routes = [
  {path: 'personal', component: PersonalAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
