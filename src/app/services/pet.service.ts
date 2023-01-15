import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pet} from "../models/pet";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  url = environment.baseUrl + "/pet";
  constructor(private httpService : HttpClient) { }

  addPet(pet : Pet) : Observable<Pet>{
    return this.httpService.post<Pet>(this.url, pet);
  }
}
