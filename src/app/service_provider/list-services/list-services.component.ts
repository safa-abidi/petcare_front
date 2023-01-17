import { Component, OnInit } from '@angular/core';
import {ServiceProviderService} from "../../services/service-provider.service";
import {Service} from "../../models/service";
import {ServiceCategories} from "../../enums/service_categories";
import {NgForm} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  servicesList : Service[] = [];
  serviceCategories : string[] = Object.values(ServiceCategories)
  serviceCategoriesActivated : boolean[] = []
  isAuthenticated = false;
  role: string = ""

  constructor(private serviceProviderService : ServiceProviderService, private loginService : LoginService, private router: Router) {
    this.serviceCategories.map(()=> this.serviceCategoriesActivated.push(true))

  }

  ngOnInit(): void {
    this.serviceProviderService.getServices().subscribe(
      (s)=>{
        this.servicesList = s
      }
    )
    this.isAuthenticated = this.loginService.isLogged()
    this.role = localStorage.getItem("role")!
  }

  onCategoryChipClick(i : number){
    this.serviceCategoriesActivated[i] = !this.serviceCategoriesActivated[i]
  }

  onSearchClick(searchForm : NgForm){
    const categories = Object.keys(ServiceCategories)
    const searchCategories : string[] = []
    this.serviceCategoriesActivated.map(
      (value, index)=>{
        if(value==true)
          searchCategories.push(categories[index])
      }
    )
    this.serviceProviderService.searchServices({
      "text": searchForm.value.text,
      "categories": searchCategories,
      "maxPrice": searchForm.value.maxPrice=="" ? null : searchForm.value.maxPrice
    })
      .subscribe(
      (s)=> this.servicesList=s
    )
  }

  onAddServiceClick(){
    this.router.navigate(["services/add"])
  }

}
