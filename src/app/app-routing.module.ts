import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AddPetComponent} from "./pet/add-pet/add-pet.component";
import {LoggedInGuard} from "./guards/logged-in.guard";
import {NotloggedinGuard} from "./guards/notloggedin.guard";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent , canActivate: [NotloggedinGuard]},
  { path: 'pet/add', component: AddPetComponent, canActivate: [LoggedInGuard],},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
