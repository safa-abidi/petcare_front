import { Component, OnInit } from '@angular/core';
import {ServiceCategories} from "../../enums/service_categories";
import {NgForm} from "@angular/forms";
import {ServiceProviderService} from "../../services/service-provider.service";
import {Service} from "../../models/service";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  serviceCategories = Object.values(ServiceCategories)
  serviceCategoriesEN = Object.keys(ServiceCategories)

  constructor(private serviceProviderService : ServiceProviderService) { }

  ngOnInit(): void {
  }

  onConfirmClick(addServiceForm: NgForm){
    const service: Service = new Service(
      addServiceForm.value.category,
      addServiceForm.value.title,
      addServiceForm.value.description,
      addServiceForm.value.price,
      addServiceForm.value.city,
      +localStorage.getItem('userId')!
    )
    this.serviceProviderService.addService(service).subscribe()
  }

}
