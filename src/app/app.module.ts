<<<<<<< HEAD
import { forwardRef, NgModule } from '@angular/core';
=======
import { NgModule } from '@angular/core';
>>>>>>> 73796be5cbafbcdc6b2304159b6e48f633192223
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { DropdownWithIconComponent } from './form/dropdown-with-icon/dropdown-with-icon.component';
import { TextInputWithIconComponent } from './form/text-input-with-icon/text-input-with-icon.component';
<<<<<<< HEAD
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> 73796be5cbafbcdc6b2304159b6e48f633192223

@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    DropdownWithIconComponent,
    TextInputWithIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>""),
      multi: true
    }
  ],
  
=======
    FontAwesomeModule
  ],
  providers: [],
>>>>>>> 73796be5cbafbcdc6b2304159b6e48f633192223
  bootstrap: [AppComponent]
})
export class AppModule { }
