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
  servicesRequestsFiltered = this.servicesRequests
  filterOptions: boolean[] = [true,true,true]
  role: string = ""
  constructor(private serviceRequestService : ServiceRequestService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role')!
    if(this.role.toLowerCase().includes('provider')){
      this.serviceRequestService.getServiceRequestWithProviderId(+localStorage.getItem('userId')!).subscribe(
        (e) => {
          this.servicesRequests = e
          this.servicesRequestsFiltered = e
        }
      )
    }
    else if(this.role.toLowerCase().includes('petowner')){
      this.serviceRequestService.getServiceRequestWithPetOwnerId(+localStorage.getItem('userId')!).subscribe(
        (e) => {
          this.servicesRequests = e
          this.servicesRequestsFiltered = e
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
      return "Confirmé"
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

  onChipClick(index: number){
    this.filterOptions[index] = !this.filterOptions[index]
    let f : string[] = []
    if(this.filterOptions[0]== true) f.push('pending')
    if(this.filterOptions[1]== true) f.push('confirmed')
    if(this.filterOptions[2]== true) f.push('canceled')

    this.servicesRequestsFiltered = []
    this.servicesRequests.map((e)=>{
      if(f.includes(e.status!)) this.servicesRequestsFiltered.push(e)
    })
  }
}
