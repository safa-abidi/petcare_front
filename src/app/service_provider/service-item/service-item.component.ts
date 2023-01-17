import {Component, Input, OnInit} from '@angular/core';
import {faCircleDollarToSlot, faLocationDot, faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import {Service} from "../../models/service";
import {ServiceCategories} from "../../enums/service_categories";

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  locationIcon = faLocationDot
  moneyIcon = faCircleDollarToSlot
  @Input() service!: Service;
  category : string = ""
  isMine : boolean = false;
  truncate  : boolean = true
  detailsButtonText = "Voir details"

  constructor() { }

  ngOnInit(): void {
    this.category = Object.values(ServiceCategories)[Object.keys(ServiceCategories).indexOf(this.service.category)]
    this.isMine = this.service.user!.id == +localStorage.getItem("userId")!
  }

  onDetailsClick(){
    this.truncate = !this.truncate;
    if(this.truncate){
      this.detailsButtonText = "Voir details"
    }
    else{
      this.detailsButtonText= "Masquer details"
    }
  }

}
