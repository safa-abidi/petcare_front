import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../../services/task.service";

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
  dayTasks: any;

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks(this.year+"-"+this.monthNumber+"-"+this.dayNumber).subscribe(
      (res) => { this.dayTasks= res},
      (err)=> {console.log(err)}
    )
  }

  setButtonVisibility(){
    if(this.enabled) {
      this.isButtonVisible = !this.isButtonVisible;
    }
  }


}
