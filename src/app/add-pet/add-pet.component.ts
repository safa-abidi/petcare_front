import { Component, OnInit } from '@angular/core';
import {faCamera, faPaw, faVenusMars, faWeight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  pawIcon = faPaw
  genderIcon = faVenusMars
  weightIcon = faWeight
  photoIcon = faCamera

  constructor() { }

  ngOnInit(): void {
  }

}
