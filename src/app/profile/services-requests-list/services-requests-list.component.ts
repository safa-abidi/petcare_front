import { Component, OnInit } from '@angular/core';
import {ServiceRequestService} from "../../services/service-request.service";
import {ServiceRequest} from "../../models/service_request";
import {faCheck, faClose} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-services-requests-list',
  templateUrl: './services-requests-list.component.html',
  styleUrls: ['./services-requests-list.component.css']
})
export class ServicesRequestsListComponent implements OnInit {

  confirmIcon = faCheck
  cancelIcon = faClose
  servicesRequests: ServiceRequest[] = []
  constructor(private serviceRequestService : ServiceRequestService) { }

  ngOnInit(): void {
    this.serviceRequestService.getServiceRequestWithProviderId(+localStorage.getItem('userId')!).subscribe(
      (e) => {
        this.servicesRequests = e
      }
    )
  }

  animalType(type: string): string{
    if(type == "cat")
      return "Chat";
    else if(type=="dog"){
      return "Chien"
    }
    else if(type=="hamster"){
      return "Hamster"
    }
    else if(type=="bird"){
      return "Oiseau"
    }
    return ""
  }

  statusType(type: string): string{
    if(type == "pending")
      return "En Attente";
    else if(type=="canceled"){
      return "Annulé"
    }
    else if(type=="accepted"){
      return "Accepté"
    }
    return ""
  }

}
