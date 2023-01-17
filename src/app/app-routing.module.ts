import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AddPetComponent} from "./pet/add-pet/add-pet.component";
import {ProfileComponent} from "./profile/profile/profile.component"
import {AddServiceComponent} from "./service_provider/add-service/add-service.component";
import {LoggedInGuard} from "./guards/logged-in.guard";
import {NotloggedinGuard} from "./guards/notloggedin.guard";
import {ServiceProviderGuard} from "./guards/service-provider.guard";
import {PetOwnerGuard} from "./guards/pet-owner.guard";
import { NotFoundComponent } from './not-found/not-found.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import {HomePageComponent} from "./home/home-page/home-page.component";
import { MyPetsComponent } from './pet/my-pets/my-pets.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent , canActivate: [NotloggedinGuard]},
  {
    path : "pet",
    children:[
      { path: 'add', component: AddPetComponent, canActivate: [LoggedInGuard, PetOwnerGuard],},
      { path: 'all', component: MyPetsComponent, canActivate: [LoggedInGuard, PetOwnerGuard],},
    ]
  },
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard]},
  { path: 'signup', component: UserSignupComponent},
  { path: 'service/add', component: AddServiceComponent, canActivate: [LoggedInGuard, ServiceProviderGuard]},
  { path: 'home', component: HomePageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path:'**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
