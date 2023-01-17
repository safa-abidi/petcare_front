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

  postTask(body: string) {
    this.http.post(this.urlBase,body).subscribe(
      (response) => { console.log(response);},
      (error) => { console.log(error);}
    );
  }

  deleteTask(id:number) {
    this.http.delete(this.urlBase+id).subscribe(
      (res) => {console.log(res)},
      error => console.log(error)
    )
  }

}
