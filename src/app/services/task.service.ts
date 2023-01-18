import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private urlBase = "http://localhost:3000/task/";

  constructor(private http: HttpClient) { }

  getTasks(date: string) {
    return this.http.get(this.urlBase+localStorage.getItem('userId')!+"/"+date)
  }

  postTask(body: any) {
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
