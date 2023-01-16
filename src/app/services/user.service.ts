import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login.service";
import {Observable} from "rxjs";
import {Pet} from "../models/pet";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.baseUrl + "/user";

  constructor(private httpService : HttpClient, private loginService: LoginService) {}

  deleteUser(id: number) : Observable<any>{
    this.loginService.logout()
    return this.httpService.delete(`${this.url}/${id}`);
  }
}
