import { Component, OnInit } from '@angular/core';
import {ServiceProviderService} from "../../services/service-provider.service";
import {Service} from "../../models/service";
import {ServiceCategories} from "../../enums/service_categories";

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  servicesList : Service[] = [];
  serviceCategories : string[] = Object.values(ServiceCategories)
  serviceCategoriesActivated : boolean[] = []

  constructor(private serviceProviderService : ServiceProviderService) {
    this.serviceCategories.map(()=> this.serviceCategoriesActivated.push(true))
  }

  ngOnInit(): void {
    this.serviceProviderService.getService().subscribe(
      (s)=>{
        this.servicesList = s
      }
    )
  }

  onCategoryChipClick(i : number){
    this.serviceCategoriesActivated[i] = !this.serviceCategoriesActivated[i]
  }

  onSearchClick(){
    const categories = Object.keys(ServiceCategories)
    const searchCategories : string[] = []
    this.serviceCategoriesActivated.map(
      (value, index)=>{
        if(value==true)
          searchCategories.push(categories[index])
      }
    )
    console.log(searchCategories)
  }

}
