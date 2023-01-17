import { Component, OnInit } from '@angular/core';
import {ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  items: any;

  constructor(private shopService:ShopService) { }

  ngOnInit(): void {
    this.shopService.getItems().subscribe(
      (res) => { this.items = res;},
      (err) => { console.log(err); }
    );
  }
}
