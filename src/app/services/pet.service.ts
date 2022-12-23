import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  url = "http://localhost:3000/pet"; //TODO
  constructor(private httpService : HttpClient) { }

  async addPet(form : NgForm){ //TODO
    console.log(form.value)
    console.log(await this.httpService.post(this.url, form.value)) //TODO FIX
  }
}
