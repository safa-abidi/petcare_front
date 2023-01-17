import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {
  @Input() dayNumber:number = 0;
  @Input() monthNumber:number = 0;
  @Input() year:number = 0;
  isButtonVisible:boolean = false;
  @Input() isToday:boolean = false;
  @Input() enabled:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  setButtonVisibility(){
    if(this.enabled) {
      this.isButtonVisible = !this.isButtonVisible;
    }
  }


}
