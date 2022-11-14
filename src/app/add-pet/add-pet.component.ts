import { Component, OnInit } from '@angular/core';
import {faLock} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  icon = faLock

  constructor() { }

  ngOnInit(): void {
  }

}
