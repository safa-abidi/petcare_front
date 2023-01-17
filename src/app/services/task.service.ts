import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "../models/Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private urlBase = "http://localhost:3000/task/";

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.urlBase+1/*localStorage.getItem('accessToken')*/)
  }

  postTask(body: Task) {
    return this.http.post(this.urlBase,body);
  }

}
