import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url = environment.baseUrl + "/user";

  constructor(private httpClient  : HttpClient) { }
  signup(user : any){
    console.log(user);
      return this.httpClient.post(this.url, user);
  }
}
