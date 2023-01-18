import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accessory',
  templateUrl: './accessory.component.html',
  styleUrls: ['./accessory.component.css']
})
export class AccessoryComponent implements OnInit {
  @Input() image:string = "";
  @Input() name:string = "";
  @Input() price:number= 0;

  constructor() { }

  ngOnInit(): void {
  }

}
