import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCategories } from 'src/app/enums/service_categories';
import { Service } from 'src/app/models/service';
import { ServiceProviderService } from "../../services/service-provider.service";


@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {

  serviceCategories = Object.values(ServiceCategories)
  serviceCategoriesEN = Object.keys(ServiceCategories)

  serviceId: number = 0;
  service : Service = new Service(ServiceCategories.grooming,"","",0,"",0);

  constructor(private serviceProviderService: ServiceProviderService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.serviceId = params['id']
      }
    );
    this.serviceProviderService.getServiceById(this.serviceId).subscribe(
      (service: Service) => {
        this.service = service;
      }
    )
  }

  updateService(updateServiceForm: NgForm){
    const service: Service = new Service(
      updateServiceForm.value.category,
      updateServiceForm.value.title,
      updateServiceForm.value.description,
      updateServiceForm.value.price,
      updateServiceForm.value.city,
      +localStorage.getItem('userId')!
    )
    this.serviceProviderService.updateService(service, this.serviceId).subscribe(
      ()=>{
        this.router.navigate(['/my-services', localStorage.getItem("userId")!]) //for now redirect to profile
      }
    )
  }

}
