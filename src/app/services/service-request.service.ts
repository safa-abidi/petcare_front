import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Pet} from "../models/pet";
import {Observable} from "rxjs";
import {ServiceRequest} from "../models/service_request";

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestService {

  url = environment.baseUrl + "/service_request";
  constructor(private httpService : HttpClient) { }

  addServiceRequest(serviceRequest : ServiceRequest) : Observable<ServiceRequest>{
    return this.httpService.post<ServiceRequest>(this.url, serviceRequest);
  }

  getServiceRequestWithProviderId(id: number){
    return this.httpService.get<ServiceRequest[]>(`${this.url}/provider/${id}`)
  }

  confirmServiceRequest(id: number){
    return this.httpService.get(`${this.url}/confirm/${id}`)
  }

  cancelServiceRequest(id: number){
    return this.httpService.get(`${this.url}/cancel/${id}`)
  }

}
