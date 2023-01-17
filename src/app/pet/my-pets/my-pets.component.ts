import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit {

  myPets: Pet[] = []
  currentDate : Date = new Date();

  // localStorage.getItem("userId")
  constructor(private petService: PetService) {
    petService.getMyPets(localStorage.getItem("userId")!).subscribe((result) => {
      console.log(result.length);
      this.myPets = result;
    });
  }
  

  ngOnInit(): void {
  }


  getAge( birthDate : string){
    const ageInMilliseconds = Date.now() - Date.parse(birthDate);
    return ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
  }

  public searchCats(key: string): void {
    console.log(key);
    const results: Pet[] = [];
    for (const employee of this.myPets) {
      if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.type.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
  }

}
