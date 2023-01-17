import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Pet} from "../../models/pet";
import {ServiceRequest} from "../../models/service_request";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceRequestService} from "../../services/service-request.service";

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  providerId?: number;
  serviceId? : number;
  constructor(private activatedRoute : ActivatedRoute, private serviceRequestService: ServiceRequestService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (p)=>{
        this.providerId = p['providerId']
        this.serviceId= p['serviceId']
      }
    )
  }

  addServiceRequest(addRequestForm: NgForm){
      let serviceRequest = new ServiceRequest(
        addRequestForm.value.date,
        addRequestForm.value.address,
        addRequestForm.value.animal,
        this.providerId!,
        +localStorage.getItem('userId')!,
        this.serviceId!,
        addRequestForm.value.phone,

      );
      console.log(serviceRequest)
      this.serviceRequestService.addServiceRequest(serviceRequest).subscribe(
        ()=>{
          this.router.navigate(['/home'],)
        }
      )
  }

}
