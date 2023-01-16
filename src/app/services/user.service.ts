import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login.service";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.baseUrl + "/user";

  constructor(private httpService : HttpClient, private loginService: LoginService) {}

  deleteUser(id: number) : Observable<User>{
    this.loginService.logout()
    return this.httpService.delete<User>(`${this.url}/${id}`);
  }

  getUserById(id: number) : Observable<User>{
    return this.httpService.get<User>(`${this.url}/${id}`)
  }

  updateUser(user : User, id : number) : Observable<User>{
    return this.httpService.patch<User>(`${this.url}/${id}`, user)
  }
}
