import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Pet} from "../models/pet";
import {Observable} from "rxjs";
import {Service} from "../models/service";

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  url = environment.baseUrl + "/service";
  constructor(private httpService : HttpClient) { }

  addService(service : Service) : Observable<Service>{
    return this.httpService.post<Service>(this.url, service);
  }
}
