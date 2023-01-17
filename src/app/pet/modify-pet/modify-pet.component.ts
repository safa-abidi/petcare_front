import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {faCalendar, faCamera, faPaw, faVenusMars, faWeight} from "@fortawesome/free-solid-svg-icons";
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-modify-pet',
  templateUrl: './modify-pet.component.html',
  styleUrls: ['./modify-pet.component.css']
})
export class ModifyPetComponent implements OnInit {

  pawIcon = faPaw
  genderIcon = faVenusMars
  weightIcon = faWeight
  dateIcon = faCalendar
  animal: number = -1;

  animalId: number = 0;
  pet : Pet = new Pet("","","","",new Date(),0,0);
  date : string = "";

  constructor(private petService: PetService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.animalId = params['id']
      }
    );
    this.petService.getPetById(this.animalId).subscribe(
      (pet: Pet) => {
        this.pet = pet;
        this.animal = pet.type == "dog" ? 0 : pet.type == "cat" ? 1 : pet.type == "hamster" ? 2 : 3;
        this.date = new Date(pet.birthDate).toISOString().split('T')[0];
      }
    )
  }

  chooseAnimal(i: number){
    this.animal = i;
  }

  updatePet(form: NgForm){
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
        +localStorage.getItem("userId")!,
        val.weight != 0 ? val.weight : null,
      )

      this.activatedRoute.params.subscribe(
        params => {
          this.animalId = params['id']
        }
      );

      this.petService.updatePet(pet, this.animalId).subscribe(
        ()=>{
          this.router.navigate(['/profile'],) //should redirect to pets list
        }
      )
    }
  }
}
