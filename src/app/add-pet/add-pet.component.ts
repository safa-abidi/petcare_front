import { Component, OnInit } from '@angular/core';
import {faCalendar, faCamera, faPaw, faVenusMars, faWeight} from "@fortawesome/free-solid-svg-icons";
import {NgForm} from "@angular/forms";

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
  dateIcon = faCalendar

  constructor() { }

  ngOnInit(): void {
  }

  addPet(form : NgForm){
    console.log(form.value)
  }

}
