import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addServiceRequest(addRequestForm: NgForm){

  }

}
