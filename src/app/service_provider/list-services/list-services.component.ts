import { Component, OnInit } from '@angular/core';
import {ServiceProviderService} from "../../services/service-provider.service";
import {Service} from "../../models/service";

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  servicesList : Service[] = [];

  constructor(private serviceProviderService : ServiceProviderService) { }

  ngOnInit(): void {
    this.serviceProviderService.getService().subscribe(
      (s)=>{
        this.servicesList = s
      }
    )
  }

}
