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

  getServices(): Observable<Service[]>{
    return this.httpService.get<Service[]>(this.url)
  }

  searchServices(body: Object) : Observable<Service[]>{
    return this.httpService.post<Service[]>(this.url+"/search",body)
  }

  updateService(service : Service, id : number) : Observable<Service>{
    return this.httpService.patch<Service>(`${this.url}/${id}`, service)
  }

  getServiceById(id: number) : Observable<Service>{
    return this.httpService.get<Service>(`${this.url}/${id}`)
  }
}
