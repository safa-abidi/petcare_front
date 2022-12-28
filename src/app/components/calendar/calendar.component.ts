import { Component, OnInit } from '@angular/core';
import {CalendarService} from "../../services/calendar.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  days:number[][] = [[]]
  dayNames:string[] = []
  constructor(private calendarService:CalendarService) { }

  ngOnInit(): void {
    this.days = this.calendarService.generateMonthDays().days;
    this.dayNames = this.calendarService.generateMonthDays().dayNames;
  }

}
