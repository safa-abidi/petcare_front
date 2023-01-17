import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {
  @Input() dayNumber:number = 0;
  isButtonVisible:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setButtonVisibility(){
    this.isButtonVisible = !this.isButtonVisible;
  }


}
