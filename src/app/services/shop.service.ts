import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private urlBase = "http://localhost:3000/item/";

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(this.urlBase)
  }
}

