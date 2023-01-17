import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, routing} from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarDayComponent } from './components/calendar/calendar-day/calendar-day.component';
import { CalendarViewComponent } from './views/calendar-view/calendar-view.component';
import { CalendarDayDetailsComponent } from './views/calendar-day-details/calendar-day-details.component';
import {FormsModule} from "@angular/forms";
import { RankPipePipe } from './pipes/rank-pipe.pipe';
import { TaskComponent } from './components/task/task.component';
import {HttpClientModule} from "@angular/common/http";
import { TimePipePipe } from './pipes/time-pipe.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarDayComponent,
    CalendarViewComponent,
    CalendarDayDetailsComponent,
    RankPipePipe,
    TaskComponent,
    TimePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
