import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pet} from "../models/pet";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  url = "http://localhost:3000/pet"; //TODO
  constructor(private httpService : HttpClient) { }

  addPet(pet : Pet) : Observable<Pet>{ //TODO return
    return this.httpService.post<Pet>(this.url, pet);
  }
}
