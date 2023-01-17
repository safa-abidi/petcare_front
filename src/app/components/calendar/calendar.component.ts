import {Component, Input, OnInit} from '@angular/core';
import {CalendarService} from "../../services/calendar.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() days:number[][] = [[]]
  dayNames:string[] = []
  @Input() month:number = 0;
  @Input() year: number = 0;
  today: number = new Date().getDate();

  constructor(private calendarService:CalendarService) {
    console.log(this.today)
  }

  ngOnInit(): void {
    this.dayNames = this.calendarService.generateCalendar(new Date()).dayNames;
  }

  setEnabled(i:number,j:number) {
    return !((i <= 1 && this.days[i][j] > 14)|| (i >=4 && this.days[i][j]<20))
  }

}
