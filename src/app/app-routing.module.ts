import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarViewComponent} from "./views/calendar-view/calendar-view.component";
import {CalendarDayDetailsComponent} from "./views/calendar-day-details/calendar-day-details.component";

const routes: Routes = [
  {path:"calendar", children: [
      {path:"",component:CalendarViewComponent},
      {path:"day/:day/:month/:year",component:CalendarDayDetailsComponent},
  ]}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
