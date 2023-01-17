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
  role: string = ""
  constructor(private serviceRequestService : ServiceRequestService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role')!
    if(this.role.toLowerCase().includes('provider')){
      this.serviceRequestService.getServiceRequestWithProviderId(+localStorage.getItem('userId')!).subscribe(
        (e) => {
          this.servicesRequests = e
        }
      )
    }
    else if(this.role.toLowerCase().includes('petowner')){
      this.serviceRequestService.getServiceRequestWithPetOwnerId(+localStorage.getItem('userId')!).subscribe(
        (e) => {
          this.servicesRequests = e
        }
      )
    }

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
    else if(type=="confirmed"){
      return "Accepté"
    }
    return ""
  }

  onConfirmClick(id: number){
    console.log(id)
    this.serviceRequestService.confirmServiceRequest(id).subscribe()
    let i = this.servicesRequests.findIndex((r)=>r.id==id)
    this.servicesRequests[i].status = "confirmed"
  }

  onCancelClick(id: number,){
    this.serviceRequestService.cancelServiceRequest(id).subscribe()
    let i = this.servicesRequests.findIndex((r)=>r.id==id)
    this.servicesRequests[i].status = "canceled"
  }

}
