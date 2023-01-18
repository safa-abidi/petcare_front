import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCategories } from 'src/app/enums/service_categories';
import { Service } from 'src/app/models/service';
import { LoginService } from 'src/app/services/login.service';
import { ServiceProviderService } from 'src/app/services/service-provider.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {
  servicesList : Service[] = [];
  serviceCategories : string[] = Object.values(ServiceCategories)
  serviceCategoriesActivated : boolean[] = []
  isAuthenticated = false;
  role: string = ""
  ownerId : number = 0;

  constructor(private activatedRoute: ActivatedRoute, private serviceProviderService : ServiceProviderService, private loginService : LoginService, private router: Router) {
    this.serviceCategories.map(()=> this.serviceCategoriesActivated.push(true))
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.ownerId = params['id']
      }
    );
    this.serviceProviderService.getServicesByProviderId(this.ownerId).subscribe(
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
