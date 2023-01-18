import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {CalendarService} from "../../services/calendar.service";
import {TaskService} from "../../services/task.service";
import {Observable} from "rxjs";

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
    this.month = this.calendarService.monthToString(this.monthNumber-1);
    this.taskService.getTasks(this.year+"-"+this.monthNumber+"-"+this.dayNumber).subscribe(
      (response) => { this.tasks = response;console.log(this.tasks);},
      (error) => { console.log(error);}
    );
  }

  async onSubmit(form: NgForm) {
    await this.taskService.postTask({
      date: this.monthNumber+"/"+this.dayNumber+"/"+this.year,
      content: this.content,
      title: this.title,
      color : this.color,
      user: localStorage.getItem("userId")!,
      time: this.year+"-"+this.monthNumber+"-"+this.dayNumber+" "+this.time+":00"
    });
    window.location.reload();
  }

}
