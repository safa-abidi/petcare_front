import { forwardRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextInputWithIconComponent } from './form/text-input-with-icon/text-input-with-icon.component';
import { DropdownWithIconComponent } from './form/dropdown-with-icon/dropdown-with-icon.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddPetComponent,
    TextInputWithIconComponent,
    DropdownWithIconComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ""),
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
