import { Component, OnInit } from '@angular/core';
import {CalendarService} from "../../services/calendar.service";

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {

  month:number = this.calendarService.generateCalendar(new Date()).month;
  year:number = this.calendarService.generateCalendar(new Date()).year;
  monthName: string =this.capitalizeFirstLetter(this.calendarService.monthToString(this.month));
  lastMonthName:string = ""
  nextMonthName :string = ""
  nextYear:number = 0
  lastYear:number = 0
  days = this.calendarService.generateCalendar(new Date()).days;

  constructor(private calendarService:CalendarService) { }

  ngOnInit(): void {
    this.lastMonthName = this.capitalizeFirstLetter(this.calendarService.monthToString(this.calendarService.lastMonth(this.month,this.year).month));
    this.nextMonthName = this.capitalizeFirstLetter(this.calendarService.monthToString(this.calendarService.nextMonth(this.month,this.year).month));
    this.lastYear = this.calendarService.nextMonth(this.month,this.year).lastYear;
    this.nextYear = this.calendarService.nextMonth(this.month,this.year).nextYear;
  }

  updateDate(dateState: { days: number[][]; year: number; month: number; nextMonth: number; lastMonth: number; }) {
    this.days = dateState.days;
    this.year = dateState.year;
    this.month = dateState.month;
    this.monthName = this.capitalizeFirstLetter(this.calendarService.monthToString(this.month));
    this.nextMonthName = this.capitalizeFirstLetter(this.calendarService.monthToString(dateState.nextMonth));
    this.lastMonthName = this.capitalizeFirstLetter(this.calendarService.monthToString(dateState.lastMonth));
    this.lastYear = this.calendarService.nextMonth(this.month,this.year).lastYear;
    this.nextYear = this.calendarService.nextMonth(this.month,this.year).nextYear;

  }

  nextMonthMthd() {
    let dateState = this.calendarService.nextMonth(this.month,this.year);
    this.updateDate(dateState);

  }

  lastMonthMthd() {
    let dateState = this.calendarService.lastMonth(this.month,this.year);
    this.updateDate(dateState);
  }

  capitalizeFirstLetter(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
}
