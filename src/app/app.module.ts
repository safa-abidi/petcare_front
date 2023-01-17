import { forwardRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPetComponent } from './pet/add-pet/add-pet.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextInputWithIconComponent } from './form/text-input-with-icon/text-input-with-icon.component';
import { DropdownWithIconComponent } from './form/dropdown-with-icon/dropdown-with-icon.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from "@angular/forms";
import { HomePageComponent } from './home/home-page/home-page.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarLoggedComponent } from './home/navbar-logged/navbar-logged.component';
import { FooterComponent } from './home/footer/footer.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ProfileDisplayComponent } from './profile/profile-display/profile-display.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { AddServiceComponent } from './service_provider/add-service/add-service.component';
import { ListServicesComponent } from './service_provider/list-services/list-services.component';
import { ServiceItemComponent } from './service_provider/service-item/service-item.component';
import { ModifyPetComponent } from './pet/modify-pet/modify-pet.component';
import { AddRequestComponent } from './service_request/add-request/add-request.component';
import { ServicesRequestsListComponent } from './profile/services-requests-list/services-requests-list.component';


import { UpdateServiceComponent } from './service_provider/update-service/update-service.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarDayComponent } from './components/calendar/calendar-day/calendar-day.component';
import { CalendarViewComponent } from './views/calendar-view/calendar-view.component';
import { CalendarDayDetailsComponent } from './views/calendar-day-details/calendar-day-details.component';
import { RankPipePipe } from './pipes/rank-pipe.pipe';
import { TaskComponent } from './components/task/task.component';
import { TimePipePipe } from './pipes/time-pipe.pipe';
import { ShopComponent } from './views/shop/shop.component';
import { AccessoryComponent } from './components/accessory/accessory.component'
import { MyServicesComponent } from './service_provider/my-services/my-services.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    DropdownWithIconComponent,
    TextInputWithIconComponent,
    AddPetComponent,
    TextInputWithIconComponent,
    DropdownWithIconComponent,
    LoginComponent,
    HomePageComponent,
    NavbarComponent,
    NotFoundComponent,
    NavbarLoggedComponent,
    FooterComponent,
    ProfileComponent,
    ProfileDisplayComponent,
    ChangePasswordComponent,
    AddServiceComponent,
    CalendarComponent,
    CalendarDayComponent,
    CalendarViewComponent,
    CalendarDayDetailsComponent,
    RankPipePipe,
    TaskComponent,
    TimePipePipe,
    ShopComponent,
    AccessoryComponent,
    ListServicesComponent,
    ServiceItemComponent,
    ModifyPetComponent,
    AddRequestComponent,
    ServicesRequestsListComponent,
    UpdateServiceComponent,
    MyServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>""),
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
