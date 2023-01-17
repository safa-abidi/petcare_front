import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {CalendarService} from "../../services/calendar.service";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-calendar-day-details',
  templateUrl: './calendar-day-details.component.html',
  styleUrls: ['./calendar-day-details.component.css']
})
export class CalendarDayDetailsComponent implements OnInit {
  dayNumber: number = 0;
  monthNumber: number = 0;
  month:string = "";
  year: number = 0;
  tasks: any;
  title:string = "";
  content:string = "";
  color:string = "#193A6A";
  time: Date = new Date();

  constructor(private activatedRoute:ActivatedRoute, private calendarService:CalendarService, private taskService:TaskService) {
    activatedRoute.params.subscribe(params => {this.dayNumber = params['day']})
    activatedRoute.params.subscribe(params => {this.monthNumber = params['month']})
    activatedRoute.params.subscribe(params => {this.year = params['year']})
  }

  ngOnInit(): void {
    this.month = this.calendarService.monthToString(this.monthNumber);
    this.year = this.calendarService.generateCalendar().year;
    this.taskService.getTasks().subscribe(
      (response) => { this.tasks = response;console.log(this.tasks);},
      (error) => { console.log(error);}
    );
  }

  onSubmit(form: NgForm) {
    this.taskService.postTask({
      "date": new Date(this.dayNumber,this.monthNumber,this.year),
      "content": this.content,
      "title": this.title,
      "color" : this.color,
      "userId": 1,
      "time": this.time
    }).subscribe(
      (response) => { console.log(response);},
      (error) => { console.log(error);}
    );
  }

}
