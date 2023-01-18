import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit {

  filter: string = "";
  myPets: Pet[] = []
  filtered : Pet[] = []
  currentDate: Date = new Date();

  // localStorage.getItem("userId")
  constructor(private petService: PetService, private router: Router) {

  }


  ngOnInit(): void {
    this.getPets();
  }
  getPets() {
    this.petService.getMyPets(localStorage.getItem("userId")!).subscribe((result) => {
      this.myPets = result;
      this.filtered  = result;
    });
  }


  getAge(birthDate: string) {
    const ageInMilliseconds = Date.now() - Date.parse(birthDate);
    return ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
  }

  public searchPets(event : any) {
    const key :string = event.target.value;
    const results: Pet[] = [];
    for (const pet of this.myPets) {
      if (pet.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 || pet.breed.toLowerCase().indexOf(key.toLowerCase()) !== -1 ) { results.push(pet); }
    }
    this.filtered = results;
    if (key.length === 0) {
      this.getPets();
    }

  }

  onModifyPetClick(id: number){
    this.router.navigate(['pet/modify',id]);
  }

}
