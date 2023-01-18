import {Component, Input, OnInit} from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task:any;
  faTrash = faTrash;

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  deleteTask() {
    this.taskService.deleteTask(this.task.id);
    window.location.reload();
  }

}
