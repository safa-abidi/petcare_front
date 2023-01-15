import { Component, OnInit } from '@angular/core';
import {faCalendar, faCamera, faPaw, faVenusMars, faWeight} from "@fortawesome/free-solid-svg-icons";
import {NgForm} from "@angular/forms";
import {PetService} from "../../services/pet.service";
import {Pet} from "../../models/pet";

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  pawIcon = faPaw
  genderIcon = faVenusMars
  weightIcon = faWeight
  dateIcon = faCalendar
  animal = -1;

  constructor(private petService : PetService) { }

  ngOnInit(): void {
  }

  chooseAnimal(i: number){
    this.animal = i;
  }

  addPet(form : NgForm){
    if(this.animal != -1 || form.valid){
      let val = form.value
      let petType = ""

      if(this.animal == 0) petType="dog"
      else if(this.animal==1) petType="cat"
      else if(this.animal==2) petType="hamster"
      else if(this.animal==3) petType="bird"

      let pet = new Pet(
        petType,
        val.name,
        val.gender,
        val.breed,
        val.birthDate,
        1, //TODO CHANGE BY REAL OWNER ID
        val.weight != 0 ? val.weight : null,
      )
      this.petService.addPet(pet).subscribe()
    }
  }

}
