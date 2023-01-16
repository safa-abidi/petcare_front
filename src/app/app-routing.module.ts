import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import {AddPetComponent} from "./pet/add-pet/add-pet.component";
import {ProfileComponent} from "./profile/profile/profile.component"
import {LoggedInGuard} from "./guards/logged-in.guard";
import {NotloggedinGuard} from "./guards/notloggedin.guard";
import { NotFoundComponent } from './not-found/not-found.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent , canActivate: [NotloggedinGuard]},
  { path: 'pet/add', component: AddPetComponent, canActivate: [LoggedInGuard],},
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard]},
  { path: 'signup', component: UserSignupComponent},
  { path: 'home', component: HomePageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path:'**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
