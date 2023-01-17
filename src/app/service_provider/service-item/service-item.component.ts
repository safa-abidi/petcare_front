import {Component, Input, OnInit} from '@angular/core';
import {faCircleDollarToSlot, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {Service} from "../../models/service";
import { Router } from '@angular/router';
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
  role : string = ""
  serviceId : number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.category = Object.values(ServiceCategories)[Object.keys(ServiceCategories).indexOf(this.service.category)]
    this.isMine = this.service.user!.id == +localStorage.getItem("userId")!
    this.role = localStorage.getItem("role")!
    this.serviceId = this.service.id!;
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


  onRequestClick() {
    this.router.navigate(['requests/add', this.service.user?.id!, this.service!.id!]);
  }

  updateService(){
    console.log("update service");
    this.router.navigate(['/service/modify/'+this.serviceId]);
  }

}
